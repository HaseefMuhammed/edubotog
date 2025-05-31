const APP_ID = "26615088d2834fa49c767edbb96c92da";
const CHANNEL = "main";
let TOKEN = ""; // Will be fetched dynamically

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAE8Dzdug6VpiXLeF9nhEl7Ycmit5IUejRwhZ-wlIkeSLurJxAC0jX1FkNmA4T1jN73HR_U_BDhJj3/pub?output=csv";

async function fetchTokenFromSheet() {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL);
    const text = await response.text();
    // The token should be in the first cell (A1)
    TOKEN = text.split('\n')[0].replace(/"/g, '').trim();
    console.log("Fetched TOKEN from Google Sheet:", TOKEN); // Log the fetched token
  } catch (error) {
    console.error("Failed to fetch token from Google Sheet:", error);
    throw error;
  }
}

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

let localTracks = [];
let remoteUsers = {};

let joinAndDisplayLocalStream = async () => {
  await fetchTokenFromSheet();
  client.on('user-published', handleUserJoined)
  client.on('user-left', handleUserLeft)
  try {
    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null);

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    let player = `
      <div class="video-container" id="user-container-${UID}">
        <div class="video-player" id="user-${UID}"></div>
      </div>
    `;

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player);

    localTracks[1].play(`user-${UID}`);

    await client.publish([localTracks[0], localTracks[1]]);
  } catch (error) {
    console.error("Error joining and displaying local stream:", error);
  }
}

let joinStream = async () => {
  try {
    await joinAndDisplayLocalStream();
    document.getElementById('join-btn').style.display = 'none';
    document.getElementById('stream-controls').style.display = 'flex';
  } catch (error) {
    console.error("Error joining stream:", error);
  }
}

let handleUserJoined = async (user, mediaType) => {
  remoteUsers[user.uid] = user
  await client.subscribe(user, mediaType)

  if (mediaType === 'video') {
    let player = document.getElementById(`user-container-${user.uid}`)
    if (player != null) {
      player.remove()
    }
    player = `<div class="video-container" id="user-container-${user.uid}">
        <div class="video-player" id="user-${user.uid}"></div>
        </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    user.videoTrack.play(`user-${user.uid}`)
  }

  if (mediaType === 'audio') {
    user.audioTrack.play()
  }

}

let handleUserLeft = async (user) => {
  delete remoteUsers[user.uid]
  document.getElementById(`user-container-${user.uid}`).remove()
}

let leaveAndRemoveLocalStream = async () => {
  for (let i = 0; localTracks.length > i; i++) {
    localTracks[i].stop()
    localTracks[i].close()
  }

  await client.leave()
  document.getElementById('join-btn').style.display = 'block'
  document.getElementById('stream-controls').style.display = 'none'
  document.getElementById('video-streams').innerHTML = ''
}

let toggleMic = async (e) => {
  if (localTracks[0].muted) {
    await localTracks[0].setMuted(false)
    e.target.innerText = 'Mic on'
    e.target.style.backgroundColor = 'cadetblue'
  } else {
    await localTracks[0].setMuted(true)
    e.target.innerText = 'Mic off'
    e.target.style.backgroundColor = '#EE4B2B'
  }
}

document.getElementById('join-btn').addEventListener('click', joinStream);
document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
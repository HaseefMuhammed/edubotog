// Dont use this operationg system without lisence
// copyright 2024 Haseef Muhammer
// Web Craft and Any Time Services
// Library FLowwaypc
// css library Haseef Swift language
// Server Git Hub
// This website already hosted on netlify inc

console.log("Dont use this operationg system without lisence copyright 2024 Haseef Muhammer Web Craft and Any Time Services Library FLowwaypc css library Haseef Swift languageServer Git HubThis website already hosted on netlify inc");

// clock

window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? " AM" : " PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + " " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });

//   Tap Tap

const audio = new Audio();
audio.src = "images/effect.mp3";


// JavaScript for horizontal scrolling between pages
// JavaScript for horizontal scrolling between pages and automatic scrolling
let isDragging = false;
let startX, scrollLeft;
let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');

document.getElementById('scrollable').addEventListener('mousedown', startDragging);
document.getElementById('scrollable').addEventListener('touchstart', startDragging);

function startDragging(e) {
  isDragging = true;
  if (e.type === 'mousedown') {
    startX = e.pageX - document.getElementById('scrollable').offsetLeft;
  } else if (e.type === 'touchstart') {
    startX = e.touches[0].pageX - document.getElementById('scrollable').offsetLeft;
  }
  scrollLeft = document.getElementById('scrollable').scrollLeft;
}

document.getElementById('scrollable').addEventListener('mousemove', moveScroll);
document.getElementById('scrollable').addEventListener('touchmove', moveScroll);

function moveScroll(e) {
  if (!isDragging) return;
  e.preventDefault();
  let x;
  if (e.type === 'mousemove') {
    x = e.pageX - document.getElementById('scrollable').offsetLeft;
  } else if (e.type === 'touchmove') {
    x = e.touches[0].pageX - document.getElementById('scrollable').offsetLeft;
  }
  const walk = (x - startX) * 3; // Adjust scrolling speed as needed
  document.getElementById('scrollable').scrollLeft = scrollLeft - walk;
}

document.getElementById('scrollable').addEventListener('mouseup', stopDragging);
document.getElementById('scrollable').addEventListener('mouseleave', stopDragging);
document.getElementById('scrollable').addEventListener('touchend', stopDragging);

function stopDragging() {
  isDragging = false;
}

document.getElementById('scrollable').addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default scrolling behavior

    // Calculate the direction of scrolling
    const delta = Math.sign(e.deltaY);

    // Calculate the index of the next page
    let nextPageIndex = currentPageIndex + delta;
    if (nextPageIndex < 0) {
        nextPageIndex = 0;
    } else if (nextPageIndex >= pages.length) {
        nextPageIndex = pages.length - 1;
    }

    // Scroll to the next page
    pages[nextPageIndex].scrollIntoView({ behavior: 'smooth' });
    currentPageIndex = nextPageIndex;
});


// calculator

console.log("script ideled");



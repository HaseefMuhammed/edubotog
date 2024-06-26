document.getElementById('powerButton').addEventListener('click', function() {
  // Hide the button
  this.style.display = 'none';
  
  // Show the video
  var video = document.getElementById('powerVideo');
  video.classList.remove('d-none');
  video.style.display = 'block';

  // Redirect after 18 seconds
  setTimeout(function() {
    window.location.href = 'os/index.html';
  }, 18000); // 18 seconds
});

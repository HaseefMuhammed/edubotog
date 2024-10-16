// Don't use this operating system without a license
// Copyright 2024 Haseef Muhammed
// Web Craft and Any Time Services
// Library: FlowwayPC
// CSS Library: Haseef Swift Language
// Server: GitHub
// This website is already hosted on Netlify Inc.

console.log("Don't use this operating system without a license. Copyright 2024 Haseef Muhammed. Web Craft and Any Time Services. Library: FlowwayPC, CSS Library: Haseef Swift Language, Server: GitHub. This website is already hosted on Netlify Inc.");

// Clock
window.addEventListener("load", () => {
    clock();
    
    function clock() {
        const today = new Date();
        
        // Get time components
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        
        // Add '0' to hour, minute & second when they are less than 10
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;
        
        // Make clock a 12-hour time clock
        const hourTime = hour > 12 ? hour - 12 : hour;
        
        // Assign 'am' or 'pm' to indicate time of the day
        const ampm = hour < 12 ? " AM" : " PM";
        
        // Get date components
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();
        
        // Declaring a list of all months in a year
        const monthList = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get current date and time
        const date = `${monthList[month]} ${day}, ${year}`;
        const time = `${hourTime}:${minute}:${second}${ampm}`;
        
        // Combine current date and time
        const dateTime = `${date} - ${time}`;
        
        // Print current date and time to the DOM
        document.getElementById("date-time").innerHTML = dateTime;
        
        // Update the clock every second
        setTimeout(clock, 1000);
    }
});

// Tap Tap Sound Effect
const audio = new Audio();
audio.src = "images/effect.mp3";

// JavaScript for horizontal scrolling between pages
let isDragging = false;
let startX, scrollLeft;
let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');
const scrollable = document.getElementById('scrollable');

scrollable.addEventListener('mousedown', startDragging);
scrollable.addEventListener('touchstart', startDragging);

function startDragging(e) {
    isDragging = true;
    startX = (e.type === 'mousedown') ? e.pageX - scrollable.offsetLeft : e.touches[0].pageX - scrollable.offsetLeft;
    scrollLeft = scrollable.scrollLeft;
}

scrollable.addEventListener('mousemove', moveScroll);
scrollable.addEventListener('touchmove', moveScroll);

function moveScroll(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = (e.type === 'mousemove') ? e.pageX - scrollable.offsetLeft : e.touches[0].pageX - scrollable.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed as needed
    scrollable.scrollLeft = scrollLeft - walk;
}

scrollable.addEventListener('mouseup', stopDragging);
scrollable.addEventListener('mouseleave', stopDragging);
scrollable.addEventListener('touchend', stopDragging);

function stopDragging() {
    isDragging = false;
}

// Handle scroll with mouse wheel
scrollable.addEventListener('wheel', (e) => {
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

// Calculator (Not implemented; placeholder for future use)
console.log("Script initialized");

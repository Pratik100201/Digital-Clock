function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Format the time as HH:MM:SS
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Update the clock div with the time
    document.getElementById("clock").innerText = timeString;
  }
  
  // Call the displayTime function every second
  setInterval(displayTime, 1000);
  
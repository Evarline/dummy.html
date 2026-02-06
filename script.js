/*birthday date and time*/
const birthdayDate = new Date("Feb 8, 2026 00:00:00").getTime();

/*time interval function to update the countdown every second*/
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    /*calculating, days, hours, minutes and seconds in milliseconds,,,, Math.floor rounds off number to the nearest intergers*/
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /*Find the HTMLfrom the whole document element with id days and put the number of days left inside it, always using 2 digits.”*/
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');  /*days.toString() converts the number of days to a string just for display, and padStart(2, '0') ensures that it is always displayed with at least 2 digits, adding a leading zero if necessary.*/
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {  //if it hit zero, stop the countdownand display the message
        clearInterval(countdownFunction);
        document.getElementById("countdown-title").innerHTML = "Brains, beauty,and bold moves only.\nHappy Birthday Eve!🥂";
        document.querySelector(".timer").style.display = "none";
         document.querySelector(".current-status").style.display = "none";
         document.querySelector(".message").style.display = "none";
   }
    }, 1000);
         


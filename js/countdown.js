// set the date i'm counting down to - the date for my 26 birthday
var countDownTime = new Date("Jul 29, 2021 00:00:00").getTime();
var x = setInterval(function() {
    var nowTime = new Date().getTime();
    // get time semaining in ms
    var remainingTime = countDownTime - nowTime;
    // transform ms to d, h, m, s
    var days = Math.floor(remainingTime / 86400000);
    var hours = Math.floor((remainingTime % 86400000) / 3600000);
    var minutes = Math.floor(((remainingTime % 86400000) % 3600000) / 60000);
    var seconds = Math.floor(((((remainingTime % 86400000) % 3600000) / 10000)));
    // output
    document.getElementById("time-days").innerHTML = days;
    document.getElementById("time-hours").innerHTML = hours;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-seconds").innerHTML = seconds;
})
'use strict';
var stopWatch = new StopWatch();
console.log(stopWatch);
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

start.addEventListener("click", function(){stopWatch.startTimer()},false);
stop.addEventListener("click",function(){stopWatch.stopTimer()},false);
reset.addEventListener("click", function(){stopWatch.resetTimer()},false);

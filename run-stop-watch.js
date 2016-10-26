'use strict';
var stopWatch = new StopWatch();
console.log(stopWatch);
 var start = document.getElementById("start");
 var stop = document.getElementById("stop");
 var reset = document.getElementById("reset");

start.addEventListener("click", function(){console.log(stopWatch);stopWatch.startTimer()},false);
stop.addEventListener("click",function(){console.log(stopWatch);stopWatch.stopTimer()},false);
reset.addEventListener("click", function(){console.log(stopWatch);stopWatch.resetTimer()},false);

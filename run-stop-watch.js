'use strict';
var stopWatch = new StopWatch();

 var start = document.getElementById("start");
 var stop = document.getElementById("stop");
 var reset = document.getElementById("reset");

start.addEventListener("click", stopWatch.startTimer);
reset.addEventListener("click", stopWatch.resetTimer);

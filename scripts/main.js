'use strict';
var stopWatch = new StopWatch();

var start = document.getElementsByClassName("start")[0];
var stop = document.getElementsByClassName("stop")[0];
var reset = document.getElementsByClassName("reset")[0];

start.addEventListener("click", function(){stopWatch.startTimer()},false);
stop.addEventListener("click",function(){stopWatch.stopTimer()},false);
reset.addEventListener("click", function(){stopWatch.resetTimer()},false);

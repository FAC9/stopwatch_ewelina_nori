function StopWatch () {
  'use strict';
  this.timeElapsed = 0;
  this.startTime = 0;

};

StopWatch.prototype.startTimer = function(startTime){
    var timerStarted = startTime; // argument externally supplied
    console.log("startTime: "+startTime);
    return timerStarted;
}

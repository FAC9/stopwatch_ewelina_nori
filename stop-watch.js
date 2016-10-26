  'use strict';
function StopWatch () {
  this.timeElapsed = 0;
  this.startTime = 0;
//  this.start = document.getElementById("start");
//  this.stop = document.getElementById("stop");
//  this.reset = document.getElementById("reset");
  console.log(this.start);

};

StopWatch.prototype.startTimer = function(startTime){
    this.startTime = startTime; // argument externally supplied
    console.log("startTime: "+this.startTime);
    return this.startTime;
};

StopWatch.prototype.stopTimer = function (endTime) {
  this.timeElapsed += (endTime - this.startTime);
  return this.timeElapsed;

};

  'use strict';
function StopWatch () {
  this.timeElapsed = 0;
  this.startTime = 0;
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

StopWatch.prototype.resetTimer = function () {
  this.timeElapsed = 0;
  this.startTime = 0;
  document.getElementsByTagName('time')[0].innerHTML = "00:00:00:00";
  return this.timeElapsed;
}

StopWatch.prototype.renderTimer = function(){
	var hours=0,minutes=0,seconds=0 ,milliseconds = 0,res;
  var elapsed = new Date().getTime() - this.startTime;
		//1ms
	milliseconds= Math.floor((elapsed%1000)/10);
	if(milliseconds < 10)
		milliseconds = '0' + milliseconds;
	//1s 1000ms
	if(elapsed > 1000){
		seconds = Math.floor(elapsed/1000)%60;
		if(seconds < 10)
			seconds = '0' + seconds;
	}else{
		seconds = '00';
	}
	//1m 60 000s
	if(elapsed > 60000){
		minutes = Math.floor(elapsed/60000)%60;
		if(minutes < 10)
			minutes = '0' + minutes;
	}else{
		minutes = '00';
	}
	//1h = 3 600 000ms
	if(elapsed > 3600000){
		hours = Math.floor(elapsed / 3600000);
			if(hours < 10)
			hours = '0' + hours;
	}else{
		hours= '00';
	}
	res = hours + ':'+minutes+':'+seconds+':'+milliseconds;
	console.log(hours,minutes,seconds,milliseconds);
	console.log(res);
  document.getElementsByClassName("timer")[0].innerHTML = res;
	return res;
}

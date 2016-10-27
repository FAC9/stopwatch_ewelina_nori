
  'use strict';
var StopWatch = function() {
  this.lock = false;
  this.isStopped = true;
  this.timeElapsed = 0;
  this.startTime = 0;
  this.interval = 0;
  this.laps = [];
};

StopWatch.prototype.stopTimer = function (time) {
  if (this.lock) return false;
  else {
    if(time){
    this.timeElapsed = time - this.startTime;
    console.log(this.timeElapsed,"manual stoptime",this.startTime);
    }else {
      this.timeElapsed = (this.startTime== 0 ? 0:new Date().getTime() - this.startTime);
    }
    this.lock = true;
    this.isStopped = true;
  //  this.timeElapsed = (this.startTime== 0 ? 0:new Date().getTime() - this.startTime);
    clearInterval(this.interval);
    this.laps.push(this.renderTimer2(this.timeElapsed));
    console.log("stop",this.timeElapsed,this.startTime);
    document.getElementsByClassName('laps')[0].innerHTML = this.laps.join("\n");
    this.lock = false;
    console.log(this.timeElapsed,"inside stop func");
    return this.timeElapsed;
  }
};
//test asynchronousity
StopWatch.prototype.resetTimer = function () {
  if(this.isStopped === false )
    this.stopTimer();
  this.timeElapsed = 0;
  this.startTime = 0;
  this.isStopped = true
  this.laps = [];
  document.getElementsByClassName('laps')[0].innerHTML = "00:00:00:00";
  console.log("reset",this.timeElapsed,this.startTime);
  document.getElementsByTagName('time')[0].innerHTML = "00:00:00:00";
  return this.timeElapsed;

}

StopWatch.prototype.renderTimer = function(startTime){
    var hours=0,minutes=0,seconds=0 ,milliseconds = 0,res;
  //console.log("IS anybody home?",this);

  var elapsed = (startTime?startTime:new Date().getTime() - this.startTime);
  this.timeElapsed = (startTime?startTime:new Date().getTime() - this.startTime);//!!!!!!
  console.log("ELAPSE in render",elapsed);
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
    //console.log(hours,minutes,seconds,milliseconds);
//    console.log(res);
  document.getElementsByClassName("timer")[0].innerHTML = res;
    return res;
}

StopWatch.prototype.renderTimer2 = function(time){
    var hours=0,minutes=0,seconds=0 ,milliseconds = 0,res;
  //console.log("IS anybody home?",this);

  var elapsed = time;
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
    //console.log(hours,minutes,seconds,milliseconds);
//    console.log(res);
//  document.getElementsByClassName("timer")[0].innerHTML = res;
    return res;
}
StopWatch.prototype.startTimer = function(startT){
    //console.log("Am I herenow?",this);
    if (this.lock || !this.isStopped) return false;
    else {
      if(startT){
        this.startTime = startT;
        console.log("ITT VAGYOK");
      }else
        this.startTime = ( this.startTime ? this.startTime : new Date().getTime());
      this.lock = true;
      this.isStopped = false;
      //this.startTime = ( this.startTime ? this.startTime : new Date().getTime()); // argument externally supplied
      console.log("startTime: "+this.startTime);
      console.log("Buu",this);
      var test=this;
      this.interval = setInterval(function(){
          test.renderTimer();
          //console.log("HAHO");
        },50);
      this.lock = false;
      return  this.startTime; //true;
    }
};

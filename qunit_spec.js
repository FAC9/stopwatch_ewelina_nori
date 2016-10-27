QUnit.module( "StopWatch", {
  beforeEach: function() {
    stopWatch2.resetTimer();
  }
});
var stopWatch2 = new StopWatch();
QUnit.test( "timeElapsed should be Zero before we start the Timer", function(assert) {
  assert.equal( stopWatch2.startTime, 0);
});

QUnit.test( "startTimer() starts counting from *NOW* (when instructed)", function(assert) {
  var startTime = new Date().getTime();
  assert.equal( stopWatch2.startTimer(startTime), startTime);
});

QUnit.test( "stopTimer() stops counting", function(assert) {
  var startTime   = new Date().getTime(),
  endTime     = 0,
  timeElapsed = 0;
  assert.equal( stopWatch2.startTimer(startTime), startTime);
  endTime = startTime + 2000;
  timeElapsed = endTime - startTime;
  assert.equal( stopWatch2.stopTimer(endTime), timeElapsed);
});

QUnit.test( "startTimer() should continue counting after stopTimer()", function(assert) {

  var startTime   = new Date().getTime(),
  endTime     = 0,
  timeElapsed = 0;
  assert.equal( stopWatch2.startTimer(startTime), startTime);
  endTime = startTime + 5000;
  assert.equal( stopWatch2.stopTimer(endTime), 5000);
  console.log("Pause timer ...");

  endTime = startTime + 7000;
  assert.equal( stopWatch2.stopTimer(endTime), 7000);//12000);
});

QUnit.test( "resetTimer() should reset to zero ready for a new activity", function(assert) {
  var startTime   = new Date().getTime(),
  endTime     = 0,
  timeElapsed =  stopWatch2.resetTimer();
  assert.equal(  stopWatch2.startTimer(startTime), startTime);
  endTime = startTime + 2000;
  timeElapsed = endTime - startTime;
  assert.equal(  stopWatch2.stopTimer(endTime), timeElapsed);
  assert.equal(  stopWatch2.resetTimer(), 0);
});

QUnit.test( "renderTimer() displays time as a string of digits separated by colons", function(assert) {
  var dayInMilliseconds =  24   *   60    *   60    *   1000;
  var startTime =  (dayInMilliseconds - 1000) ;
  assert.equal( stopWatch2.renderTimer(startTime), '23:59:59:00');
});
QUnit.test( "renderTimer() display leading zeros", function(assert) {
  var h = 60 * 60 * 1000 * 9; // 9 hours in milliseconds
  var m = 60 * 1000 * 8;      // 8 minutes
  var s = 1000 * 7;           // 7 seconds
  var leadingZeroStartTime = h + m + s + 6;
  var startTime = leadingZeroStartTime;
  assert.equal( stopWatch2.renderTimer(startTime), '09:08:07:00');
});

QUnit.test("description", function(assert) {
  var done = assert.async();
  stopWatch2.startTimer();
  setTimeout(function(){
    assert.ok(Math.round(stopWatch2.timeElapsed/100) === 30, "Passed" );
    done();
  }, 3000);
  setTimeout(function(){
    stopWatch2.resetTimer();
    done();
  }, 3500);

});

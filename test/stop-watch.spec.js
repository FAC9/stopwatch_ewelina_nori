QUnit.module( "StopWatch", {
  beforeEach: function() {
    stopWatch.reset();
  }
});

QUnit.test( "timeElapsed should be zero before we start the stopwatch", function(assert) {
  assert.equal(stopWatch.startTime, 0);
});

QUnit.test( "start() starts counting from now", function(assert) {
  var startTime = new Date().getTime();
  assert.equal(stopWatch.start(startTime), startTime);
});

QUnit.test( "stop() stops counting", function(assert) {
  var startTime = new Date().getTime(),
  endTime = 0,
  timeElapsed = 0;
  assert.equal(stopWatch.start(startTime), startTime);
  endTime = startTime + 2000;
  timeElapsed = endTime - startTime;
  assert.equal(stopWatch.stop(endTime), timeElapsed);
});

QUnit.test( "start() should continue counting after stopTimer()", function(assert) {
  var startTime = new Date().getTime(),
  endTime = 0,
  timeElapsed = 0;
  assert.equal(stopWatch.start(startTime), startTime);
  endTime = startTime + 5000;
  assert.equal(stopWatch.stop(endTime), 5000);
  endTime = startTime + 7000;
  assert.equal(stopWatch.stop(endTime), 7000);//12000);
});

QUnit.test( "reset() should reset to zero ready for a new activity", function(assert) {
  var startTime = new Date().getTime(),
  endTime = 0,
  timeElapsed = stopWatch.reset();
  assert.equal(stopWatch.start(startTime), startTime);
  endTime = startTime + 2000;
  timeElapsed = endTime - startTime;
  assert.equal(stopWatch.stop(endTime), timeElapsed);
  assert.equal(stopWatch.reset(), 0);
});

QUnit.test( "render() displays time as a string of digits separated by colons", function(assert) {
  var dayInMilliseconds =  24 * 60 * 60 * 1000;
  var startTime = dayInMilliseconds - 1000;
  assert.equal(stopWatch.render(startTime), '23:59:59:00');
});

QUnit.test( "render() display leading zeros", function(assert) {
  var h = 60 * 60 * 1000 * 7; // 7 hours in milliseconds
  var m = 60 * 1000 * 26; // 26 minutes
  var s = 1000 * 2; // 2 seconds
  var startTime = h + m + s + 6;
  assert.equal(stopWatch.render(startTime), '07:26:02:00');
});

QUnit.test("Async", function(assert) {
  var startTime = new Date().getTime();
  assert.equal( stopWatch.start(startTime), startTime);
  var done = assert.async();
  stopWatch.start();
  setTimeout(function(){
    assert.ok(Math.round(stopWatch.timeElapsed/100) === 30, "Passed");
    done();
  }, 3000);
  setTimeout(function(){
      stopWatch.reset();
    }, 3500);
});


//});

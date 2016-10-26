describe("Stopwatch",function(){

  var watch = new StopWatch();

  /*describe("StopWatch HTML elements",function(){
  it("time display",function(){
  expect(document.getElementsByTagName("time")[0]).toBeDefined();
});
it("start button",function(){
expect(document.getElementById("start")).toBeDefined();
});
it("stop button",function(){
expect(document.getElementById("stop")).toBeDefined();
});
it("reset button",function(){
expect(document.getElementById("reset")).toBeDefined();
});
});*/
describe("Stopwatch functionality",function(){

  it("start counting time", function(){
    expect(watch).toBeDefined();
  });

  it("StopWatch should be zero before we start the Timer", function(){
    expect(watch.timeElapsed).toBe(0);
  });

  it("StopWatch should have a startTime variable", function(){
    expect(watch.startTime).toBe(0);
  });

  it( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    expect( watch.startTimer(startTime)).toBe( startTime);
  });

  it( "stopTimer() stops counting", function() {
    var startTime   = new Date().getTime(),
    endTime     = 0,
    timeElapsed = 0;
    expect( watch.startTimer(startTime)).toBe(startTime);

    endTime = startTime + 5000;
    timeElapsed = endTime - startTime;
    expect( watch.stopTimer(endTime)).toBe(timeElapsed);
  });

  it ("startTimer() should continue counting after stopTimer()",function (){
    var startTime   = new Date().getTime(),
    endTime     = 0,
    timeElapsed = 0;
    expect( watch.startTimer(startTime)).toBe(startTime);

    endTime = startTime + 5000;
    timeElapsed = endTime - startTime;
    expect( watch.stopTimer(endTime)).toBe(timeElapsed);


    startTime = new Date().getTime();
    endTime = startTime + 7000;
    expect( watch.stopTimer(endTime)).toBe(12000);
  });

});
});

describe("Stopwatch",function(){
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
      var watch = new StopWatch();
      expect(watch).toBeDefined();
    });
  });
});

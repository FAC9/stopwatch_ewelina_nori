'use strict';
window.onload = windowOnLoad;

function windowOnLoad() {
  StopWatch("stopWatch1").init();
  StopWatch("stopWatch2").init();
}

var StopWatch = (function (document) {

  var StopWatch = function (containerIdSelector) {

    var hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0;

    var clockInterval,
    shouldRefreshDisplay = true;

    var containerElement,
    timeElement,
    startBtn,
    stopBtn,
    resetBtn;

    var service = {
      init: init,
      start: start,
      stop: stop,
      reset: reset,
      getHours: getHours,
      getMinutes: getMinutes,
      getSeconds: getSeconds,
      getMilliseconds: getMilliseconds
    };

    return service;

    function init () {
      setElements();
      setClickHandlers();
      refreshTimeDisplay();
    }

    function refreshTimeDisplay () {
      if (shouldRefreshDisplay) {
        timeElement.innerHTML = formatTimeUnit(hours) + ':' + formatTimeUnit(minutes) +
        ':' + formatTimeUnit(seconds) + ':' + formatTimeUnit(milliseconds);
      }
    }

    /**
    * @param {Number} unit
    * @returns {String}
    */
    function formatTimeUnit (unit) {
      return unit.toString().length === 1 ? '0' + unit : unit;
    }

    function getHours () {
      return hours;
    }

    function getMinutes () {
      return minutes;
    }

    function getSeconds () {
      return seconds;
    }

    function getMilliseconds () {
      return milliseconds;
    }

    function setElements () {
      containerElement = document.getElementById(containerIdSelector);
      if (typeof containerElement === 'undefined') {
        throw new Error ("could not find element with selector = " + containerElement);
      }
      timeElement = findByClassName('time');
      startBtn = findByClassName('start');
      stopBtn = findByClassName('stop');
      resetBtn = findByClassName('reset');
    }

    function setClickHandlers () {
      startBtn.addEventListener("click", start);
      stopBtn.addEventListener("click", stop);
      resetBtn.addEventListener('click', reset);
    }

    /**
    * @param {String} selector
    * @returns {HTMLElement}
    */
    function findByClassName(selector) {
      var element = containerElement.getElementsByClassName(selector)[0];

      if (typeof  element === 'undefined') {
        throw new Error('validate your html, could not find element with className = ' + selector);
      }
      return element;
    }

    function start () {
      clearInterval(clockInterval);
      shouldRefreshDisplay = true;
      clockInterval = setInterval(addMillisecond, 10);
    }

    function addMillisecond () {
      if (milliseconds === 99) {
        milliseconds = 0;
        addSecond();
      } else{
        ++milliseconds;
        refreshTimeDisplay();
      }
    }

    function addSecond () {
      if (seconds === 59 ) {
        seconds = 0;
        addMinute();
      } else {
        ++seconds;
        refreshTimeDisplay();
      }
    }

    function addMinute () {
      if (minutes === 59) {
        minutes = 0;
        addHour();
      } else {
        ++minutes;
        refreshTimeDisplay();
      }
    }

    function addHour () {
      ++hours;
      refreshTimeDisplay();
    }

    function stop () {
      shouldRefreshDisplay = false;
    }

    function reset () {
      shouldRefreshDisplay = true;
      clearInterval(clockInterval);
      hours = 0;
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
      refreshTimeDisplay();
    }
  }
  return StopWatch;
})(document);

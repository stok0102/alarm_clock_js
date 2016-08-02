(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmClock(time){
this.time = time;
}

AlarmClock.prototype.update = function () {
  this.time = moment().format('MMMM Do YYYY, h:mm:ss a')
};

exports.alarmModule = AlarmClock;

},{}],2:[function(require,module,exports){
var AlarmClock = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
    var newClock = new AlarmClock();
    newClock.update();
    setInterval(function() {
      newClock.update();
      $('#time').text(newClock.time);
  }, 1000);
});

},{"./../js/alarm-clock.js":1}]},{},[2]);

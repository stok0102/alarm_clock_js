var AlarmClock = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
    var newClock = new AlarmClock();
    newClock.update();
    setInterval(function() {
      newClock.update();
      $('#time').text(newClock.time);
  }, 1000);
});


$(document).ready(function(){
  $(".set-alarm-form").submit(function(event){
    event.preventDefault();
    var newClock = new AlarmClock();
    newClock.update();
    var time = $("#set-alarm").val();
    $("#timeDisplay").text(time);
    console.log(newClock.time);
    console.log(time);
    debugger;
    if (time > newClock.time) {
      $('#alarm-message').text("Your alarm has not gone off");
    } else {
      $('#alarm-message').text("Your alarm expired");
    }
  });
});

var AlarmClock = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  var newClock = new AlarmClock();
  newClock.update();
  setInterval(function() {
  newClock.update();
  $('#time').text(newClock.time);
  }, 1000);
});

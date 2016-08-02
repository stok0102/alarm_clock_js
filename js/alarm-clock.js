function AlarmClock(time){
this.time = time;
}

AlarmClock.prototype.update = function () {
  this.time = moment().format('h:mm');
};

exports.alarmModule = AlarmClock;

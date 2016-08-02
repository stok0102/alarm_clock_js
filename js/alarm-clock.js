function AlarmClock(time){
this.time = time;
}

AlarmClock.prototype.update = function () {
  this.time = moment().format('MMMM Do YYYY, h:mm:ss a')
};

exports.alarmModule = AlarmClock;

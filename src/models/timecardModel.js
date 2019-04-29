var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TimecardSchema = new Schema({
  end_time: {
    type: Date,
    allowNull: false,
  },
  start_time: {
    type: Date,
    allowNull: false,
  },
  timecard_id: {
    type: int,
    allowNull: false
  },
  emp_id: {
    type: Schema.Types.ObjectId,
    allowNull: false,
    ref: 'Employees'
  }
});

module.exports = mongoose.model('Timecards', TaskSchema);
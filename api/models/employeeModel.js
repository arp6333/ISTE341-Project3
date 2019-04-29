var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  hire_date: {
    type: Date,
    allowNull: false,
  },
  salary: {
    type: double,
    allowNull: false,
  },
  emp_name: {
    type: String,
    allowNull: false,
  },
  emp_no: {
    type: String,
    allowNull: false,
  },
  job: {
    type: String,
    allowNull: false,
  },
  dept_id: {
    type: Schema.Types.ObjectId,
    allowNull: false,
    ref: 'Departments'
  },
  emp_id: {
    type: int,
    allowNull: false,
  },
  mng_id: {
    type: Schema.Types.ObjectId,
    allowNull: false,
    ref: 'Employees'
  }
});

module.exports = mongoose.model('Employees', TaskSchema);
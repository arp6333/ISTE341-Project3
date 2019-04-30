var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  company: {
    type: String,
    default: 'arp6333'
  },
  dept_name: {
    type: String,
    allowNull: false,
  },
  dept_no: {
    type: String,
    allowNull: false,
  },
  location: {
    type: String,
    allowNull: false,
  },
  dept_id: {
    type: Number,
    allowNull: false,
  }
});

module.exports = mongoose.model('Departments', DepartmentSchema);
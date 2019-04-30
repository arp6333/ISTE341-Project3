var mongoose = require('mongoose'),
    Dept = mongoose.model('Departments');
    Emp = mongoose.model('Employees');
    TC = mongoose.model('Timecards');

// Delete all from company, .remove() will cascade
exports.delete_all = function(req, res){
  Dept.remove({ company: 'arp6333' }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json({ 'success': "arp6333's information deleted." });
  });
};

// Get one department
exports.get_dept = function(req, res) {
  Dept.findOne({ dept_id: req.body.dept_id, company: 'arp6333' }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Get all departments
exports.get_all_depts = function(req, res) {
  Dept.find({ company: 'arp6333' }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Update a department
exports.update_dept = function(req, res) {
  // dept_no cannot exist already
  Dept.find({ company: 'arp6333', dept_no: req.body.dept_no }, function(err, item) {
    if(err) {
      Dept.findOneAndUpdate({ dept_id: req.body.dept_id }, req.body, { new: true }, function(err, item) {
        if(err) {
          res.json({ 'error': err });
        }
        res.json("{ 'success':" + item + " }");
      });
    }
    res.json({ 'error': 'Given dept_id already exists.' });
  });
};

// Create a department
exports.create_dept = function(req, res) {
  var add = new Dept(req.body);
  // dept_no cannot exist already
  Dept.find({ company: 'arp6333', dept_no: req.body.dept_no }, function(err, item) {
    if(err) {
      add.save(function(err, item) {
        if(err) {
          res.json({ 'error': err });
        }
        res.json("{ 'success':" + item + " }");
      });
    }
    res.json({ 'error': 'Given dept_id already exists.' });
  });
};

// Delete a department
exports.delete_dept = function(req, res) {
  Dept.remove({ dept_id: req.body.dept_id, company: 'arp6333' }, function(err, item) {
    if(err) {
        res.json({ 'error': err });
    }
    res.json({ 'success': "arp6333's information deleted." });
  });
};

// Get one employee
exports.get_emp = function(req, res) {
  Emp.findOne({ emp_id: req.body.emp_id }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Get all employeess
exports.get_all_emps = function(req, res) {
  Emp.find({ company: 'arp6333' }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Update an employee
exports.update_emp = function(req, res) {
  // dept_id must exist
  Dept.find({ dept_id: req.body.dept_id }, function(err, item) {
    if(err) {
      res.json({ 'error': 'Given dept_id does not exist.' });
    }
    // mng_id must exist
    Emp.find({ emp_id: req.body.mng_id }, function(err, item) {
      if(err) {
        res.json({ 'error': 'Given mng_id does not exist.' });
      }
      // hire_date must be before or on today
      var current = Date.now();
      if(req.body.hire_day > current){
        res.json({ 'error': 'hire_date cannot be in the future.' });
      }
      // hire_date must be a weekday
      if(req.body.hire_day.prototype.getDay() == 0 || req.body.hire_day.prototype.getDay() == 6) {
        res.json({ 'error': 'hire_date must be on a weekday.' });
      }
      // emp_id must be unique
      Emp.find({ emp_id: req.body.emp_id }, function(err, item) {
        if(err) {
          Emp.findOneAndUpdate({ emp_id: req.body.emp_id }, req.body, { new: true }, function(err, item) {
            if(err) {
              res.json({ 'error': err });
            }
            res.json("{ 'success':" + item + " }");
          });
        }
        res.json({ 'error': 'Given emp_id already exists.' });
      });
    });
  });
};

// Create an employee
exports.create_emp = function(req, res) {
  var add = new Emp(req.body);
  // dept_id must exist
  Dept.find({ dept_id: req.body.dept_id }, function(err, item) {
    if(err) {
      res.json({ 'error': 'Given dept_id does not exist.' });
    }
    // mng_id must exist
    Emp.find({ emp_id: req.body.mng_id }, function(err, item) {
      if(err) {
        res.json({ 'error': 'Given mng_id does not exist.' });
      }
      // hire_date must be before or on today
      var current = Date.now();
      if(req.body.hire_day > current){
        res.json({ 'error': 'hire_date cannot be in the future.' });
      }
      // hire_date must be a weekday
      if(req.body.hire_day.prototype.getDay() == 0 || req.body.hire_day.prototype.getDay() == 6) {
        res.json({ 'error': 'hire_date must be on a weekday.' });
      }
      // emp_id must exist already
      Emp.find({ emp_id: req.body.emp_id }, function(err, item) {
        if(err) {
          res.json({ 'error': 'Given emp_id does not exist.' });
        }
        add.save(function(err, item) {
          if(err) {
            res.json({ 'error': err });
          }
          res.json("{ 'success':" + item + " }");
        });
      });
    });
  });
};

// Delete an employee
exports.delete_emp = function(req, res) {
  Emp.remove({ emp_id: req.body.emp_id }, function(err, item) {
    if(err) {
        res.json({ 'error': err });
    }
    res.json({ 'success': "Employee " + req.body.emp_id + " deleted." });
  });
};

// Get one timecard
exports.get_tc = function(req, res) {
  TC.findOne({ timecard_id: req.body.timecard_id }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Get all timecards
exports.get_all_tcs = function(req, res) {
  TC.find({ emp_id: req.body.emp_id }, function(err, item) {
    if(err) {
      res.json({ 'error': err });
    }
    res.json(item);
  });
};

// Update a timecard
exports.update_tc = function(req, res) {
  // emp_no must exist in our company
  Emp.find({ company: 'arp6333', emp_no: req.body.emp_no }, function(err, item) {
    if(err) {
      // start_time must be valid equal or up to a week ago from current time
      var current = Date.now();
      var oneWeekAgo = Date.now();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      if(req.body.start_time < oneWeekAgo || req.body.start_time > current){
        res.json({ 'error': 'start_time must be equal to current date or up to a week ago.' });
      }
      // end_time must be valid at least 1 hr greater than start_time on same date
      var hours = Math.abs(req.body.end_time - req.body.start_time) / (60*60*1000);
      if(hours < 1){
        res.json({ 'error': 'end_time must be at least one hour after start_time.' });
      }
      if(req.body.start_time.getFullYear() === req.body.end_time.getFullYear() && req.body.start_time.getMonth() === req.body.end_time.getMonth() && req.body.start_time.getDate() === req.body.end_time.getDate()) {
        // start_time and end_time must be a weekday
        if(req.body.start_time.prototype.getDay() == 0 || req.body.start_time.prototype.getDay() == 6 || req.body.end_time.prototype.getDay() == 0 || req.body.end_time.prototype.getDay() == 6) {
          res.json({ 'error': 'hire_date must be on a weekday.' });
        }
        // start_time and end_time must be between 06:00:00 - 18:00:00 inclusive
        var startTime = '06:00:00';
        var endTime = '18:00:00'; 
        startDate = new Date(req.body.start_time.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);
        endDate = new Date(req.body.start_time.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);
        if(startDate < req.body.start_time && endDate > req.body.start_time){
          if(startDate < req.body.end_time && endDate > req.body.end_time){
            // start_time cannot be on the same day as any other start_time
            TC.find({ emp_no: req.body.emp_no }, function(err, item) {
              if(err) {
                res.json({ 'error': err });
              }
              for(var entry in item){
                if(req.body.start_time.getFullYear() === entry.start_time.getFullYear() && req.body.start_time.getMonth() === entry.start_time.getMonth() && req.body.start_time.getDate() === entry.start_time.getDate()){
                  res.json({ 'error': 'start_time cannot be on the same day as any other start_time.' });
                }
              }
              TC.findOneAndUpdate({ timecard_id: req.body.timecard_id }, req.body, { new: true }, function(err, item) {
                if(err) {
                  res.json({ 'error': err });
                }
                res.json("{ 'success':" + item + " }");
              });
            });
          }
          res.json({ 'error': 'end_time must be between 06:00:00 - 18:00:00 inclusive.' });
        }
        res.json({ 'error': 'start_time must be between 06:00:00 - 18:00:00 inclusive.' });
      }
      res.json({ 'error': 'start_time and end_time are not on the same day.' });
    }
    res.json({ 'error': 'Given emp_id does not exist in our company.' });
  });
};

// Create a timecard
exports.create_tc = function(req, res) {
  var add = new TC(req.body);
  // emp_no must exist in our company
  Emp.find({ company: 'arp6333', emp_no: req.body.emp_no }, function(err, item) {
    if(err) {
      // start_time must be valid equal or up to a week ago from current time
      var current = Date.now();
      var oneWeekAgo = Date.now();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      if(req.body.start_time < oneWeekAgo || req.body.start_time > current){
        res.json({ 'error': 'start_time must be equal to current date or up to a week ago.' });
      }
      // end_time must be valid at least 1 hr greater than start_time on same date
      var hours = Math.abs(req.body.end_time - req.body.start_time) / (60*60*1000);
      if(hours < 1){
        res.json({ 'error': 'end_time must be at least one hour after start_time.' });
      }
      if(req.body.start_time.getFullYear() === req.body.end_time.getFullYear() && req.body.start_time.getMonth() === req.body.end_time.getMonth() && req.body.start_time.getDate() === req.body.end_time.getDate()) {
        // start_time and end_time must be a weekday
        if(req.body.start_time.prototype.getDay() == 0 || req.body.start_time.prototype.getDay() == 6 || req.body.end_time.prototype.getDay() == 0 || req.body.end_time.prototype.getDay() == 6) {
          res.json({ 'error': 'hire_date must be on a weekday.' });
        }
        // start_time and end_time must be between 06:00:00 - 18:00:00 inclusive
        var startTime = '06:00:00';
        var endTime = '18:00:00'; 
        startDate = new Date(req.body.start_time.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);
        endDate = new Date(req.body.start_time.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);
        if(startDate < req.body.start_time && endDate > req.body.start_time){
          if(startDate < req.body.end_time && endDate > req.body.end_time){
            // start_time cannot be on the same day as any other start_time
            TC.find({ emp_no: req.body.emp_no }, function(err, item) {
              if(err) {
                res.json({ 'error': err });
              }
              for(var entry in item){
                if(req.body.start_time.getFullYear() === entry.start_time.getFullYear() && req.body.start_time.getMonth() === entry.start_time.getMonth() && req.body.start_time.getDate() === entry.start_time.getDate()){
                  res.json({ 'error': 'start_time cannot be on the same day as any other start_time.' });
                }
              }
              // timecard_id must exist
              TC.find({ emp_no: req.body.emp_no, start_time: req.body.start_time }, function(err, item) {
                if(err) {
                  res.json({ 'error': 'Given timecard_id does not exist.' });
                }
                add.save(function(err, item) {
                  if(err) {
                    res.json({ 'error': err });
                  }
                  res.json("{ 'success':" + item + " }");
                });
              });
            });
          }
          res.json({ 'error': 'end_time must be between 06:00:00 - 18:00:00 inclusive.' });
        }
        res.json({ 'error': 'start_time must be between 06:00:00 - 18:00:00 inclusive.' });
      }
      res.json({ 'error': 'start_time and end_time are not on the same day.' });
    }
    res.json({ 'error': 'Given emp_id does not exist in our company.' });
  });
};

// Delete a department
exports.delete_dept = function(req, res) {
  Dept.remove({
    dept_id: req.body.dept_id,
    company: 'arp6333'
  }, 
  function(err, item) {
  if(err) {
      res.json({ 'error': err });
  }
  res.json({ 'success': "arp6333's information deleted." });
  });
};
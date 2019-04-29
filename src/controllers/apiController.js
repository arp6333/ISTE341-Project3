var mongoose = require('mongoose'),
    Dept = mongoose.model('Departments');
    Emp = mongoose.model('Employees');
    TC = mongoose.model('Timecards');

// Delete all from company, Dept.remove will cascade
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
  Dept.findOne({ dept_id: req.params.id, company: 'arp6333' }, function(err, item) {
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
      Dept.findOneAndUpdate({ dept_id: req.params.id }, req.body, { new: true }, function(err, item) {
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
  Dept.remove({
    dept_id: req.params.id,
    company: 'arp6333'
  }, 
  function(err, item) {
  if(err) {
      res.json({ 'error': err });
  }
  res.json({ 'success': req.params.company + "'s information deleted." });
  });
};
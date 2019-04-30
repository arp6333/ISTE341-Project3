module.exports = function(app) {
    var cont = require('../controllers/apiController');

    // Delete-All route
    app.route('/CompanyServices/company')
      .delete(cont.delete_all);
  
    // Department routes
    app.route('/CompanyServices/department')
      .get(cont.get_dept)
      .put(cont.update_dept)
      .post(cont.create_dept)
      .delete(cont.delete_dept);
    
    // Departments route
    app.route('/CompanyServices/departments')
      .get(cont.get_all_depts);
  
    // Employee routes
    app.route('/CompanyServices/employee')
      .get(cont.get_emp)
      .put(cont.update_emp)
      .post(cont.create_emp)
      .delete(cont.delete_emp);
    
    // Employees route
    app.route('/CompanyServices/employees')
      .get(cont.get_all_emps);
    
    // Timecard routes
    app.route('/CompanyServices/timecard')
      .get(cont.get_tc)
      .put(cont.update_tc)
      .post(cont.create_tc)
      .delete(cont.delete_tc);
    
    // Timecards route
    app.route('/CompanyServices/timecards')
      .get(cont.get_all_tcs);
  };
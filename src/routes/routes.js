module.exports = function(app) {
    var cont = require('../controllers/apiController');

    // Delete-All route
    app.route('/CompanyServices/company/:id')
      .delete(cont.delete_all);
  
    // Department routes
    app.route('/CompanyServices/department/:id')
      .get(cont.get_dept)
      .put(cont.update_dept)
      .post(cont.create_dept)
      .delete(cont.delete_dept);
    
    // Departments route
    app.route('/CompanyServices/departments')
      .get(cont.get_all_depts);
  
    // Employee routes
    

    // Timecard routes
  };
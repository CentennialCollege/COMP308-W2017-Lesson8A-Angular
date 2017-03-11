// modules required for routing
let express = require('express');
let router = express.Router();

// require the users controller
let usersController = require("../controllers/users");

router.get('/login', (req, res, next)=>{
  // GET /login - render the login view
  usersController.displayLogin(req, res);
// POST /login - process the login
}).post('/login', usersController.processLogin());

router.get('/register', (req, res, next)=>{
  // GET /register - render the registration view
   usersController.displayRegister(req, res);
}).post('/register', (req, res, next)=>{
  // POST / register - process the registration submission
  usersController.processRegistration(req, res);
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next)=>{
 usersController.performLogout(req, res);
});

module.exports = router;

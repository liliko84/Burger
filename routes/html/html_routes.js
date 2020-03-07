  
// import express.Router()
const router = require('express').Router();

// import functionality to get all burgers
const { getBurger } = require('../../controllers/burger_controller');

// set up root '/' GET route to serve home page with burger data
router.get('/', (req, res) => {
  // get all burger data
  getBurger()
    .then(burgerdata => {
      res.render('index', { burgers: burgerdata });
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = router;

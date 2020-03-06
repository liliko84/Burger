const router = require('express').Router();

const { getBurger, createBurger, updateBurger, deleteBurger} = require('../../controllers/burger_controller');

// create full CRUD routes at `/burgers` (it will eventually become '/api/cats')
router.get('/burger', (req, res) => {
  getBurgers()
    .then(burgerdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/burgers', (req, res) => {
  // req.body => { burger_name: 'Derek'}
  createCat(req.body)
    .then(catdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/burgers/:id', (req, res) => {
  updateCat(req.body, req.params.id)
    .then(burgerdata => {
      if (burgerdata.code === 404) {
        return res.status(404).json(burgerdata);
      }
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/burgers/:id', (req, res) => {
  deleteBurger(req.params.id)
    .then(burgerdata => {
      if (burgerdata.code === 404) {
        return res.status(404).json(burgerdata);
      }

      res.status(200).json(catdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
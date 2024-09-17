let express = require('express');
let router = express.Router();
let pool = require('../config/queries')

// stub data
let bankAccounts = [
  { id: 1, name: 'Wells Fargo Checking', balance: 1000 },
  { id: 2, name: 'Wells Fargo Savings', balance: 500 },
  { id: 3, name: 'Chase Credit Card', balance: 1000 },
]

// API endpoints
router.get('/', pool.getAccounts)

router.get('/:id', pool.getAccountById)

router.post('/', pool.createAccount)

router.put('/:id', pool.updateAccount)

router.delete('/:id', pool.deleteAccount)

module.exports = router
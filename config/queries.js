const Pool = require('pg').Pool
const pool = new Pool({
    user: 'buser',
    host: 'localhost',
    database: 'accounts',
    password: 'password',
    port: 5432,
})

const getAccounts = (req, res) => {
    pool.query('SELECT * FROM bank_account', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getAccountById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM bank_account WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const createAccount = (req, res) => {
    const { name, balance } = req.body
    pool.query('INSERT INTO bank_account (name, balance) VALUES ($1, $2) RETURNING *', [name, balance], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Account added with ID: ${results.rows[0].id}`)
    })
}

const updateAccount = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, balance } = req.body
    pool.query(
      'UPDATE bank_account SET name = $1, balance = $2 WHERE id = $3',
      [name, balance, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Account modified with ID: ${id}`)
      }
    )
}

const deleteAccount = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM bank_account WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Account deleted with ID: ${id}`)
    })
}

module.exports = {
    getAccounts,
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount
}
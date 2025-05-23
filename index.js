const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try{
        res.json('Welcome to SK API')
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/employees', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM employees')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/countries', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM countries')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connection Successfully on port = ${port}`)
})
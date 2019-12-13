import express = require('express');
import axios from 'axios'

// MARK: Properties

const ChuckRoutes = express.Router()

// MARK: Requests

ChuckRoutes.get('/jokes/random', async (req, res) => {
    const category = req.query.category
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    res.send(JSON.stringify(response.data))
})

ChuckRoutes.get('/categories', async (req, res) => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories')
    res.send(JSON.stringify(response.data))
})

export = ChuckRoutes
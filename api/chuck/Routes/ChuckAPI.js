const ChuckRoutes = require('express').Router();
const axios = require('axios').default;

// - GET

ChuckRoutes.get('/jokes/random', async (req, res) => {
    const category = req.query.category
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    res.send(JSON.stringify(response.data))
})

ChuckRoutes.get('/categories', async (req, res) => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories')
    res.send(JSON.stringify(response.data))
})

module.exports = { ChuckRoutes }
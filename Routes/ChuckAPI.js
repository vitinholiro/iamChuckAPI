const ChuckRoutes = require('express').Router();

// - GET

ChuckRoutes.get('/jokes/random', (req, res) => {
    const query = req.query.category
    res.send({query});
});

module.exports = { ChuckRoutes }
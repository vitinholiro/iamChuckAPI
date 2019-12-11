const BFFRoutes = require('express').Router()
const BFFComponents = require('../Components/BFFComponents')
const { BFFLabelProperties } = require('../Components/Label/BFFLabelModel')

BFFRoutes.get('/label', (req, res) => {

    const label = BFFComponents.generateLabelWith("Descrição",
    new BFFLabelProperties("blue", 10, "bold"))

    res.json({label});
})

module.exports = { BFFRoutes }
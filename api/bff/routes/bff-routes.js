const BFFRoutes = require('express').Router()
const BFFComponents = require('../components/bff-components')
const { BFFLabelProperties } = require('../components/label/bff-label-model')

BFFRoutes.get('/label', (req, res) => {

    const label = BFFComponents.generateLabelWith("Descrição",
    new BFFLabelProperties("blue", 10, "bold"))

    res.json({label});
})

module.exports = { BFFRoutes }
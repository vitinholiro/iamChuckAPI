const BFFRoutes = require('express').Router()
const BFFComponents = require('./../Components/BFFComponents')

BFFRoutes.get('/label', (req, res) => {

    const label = BFFComponents.generateLabelWith("Descrição", {
        color: "blue",
        size: 4
    });

    res.send(JSON.stringify(label))
})

module.exports = { BFFRoutes }
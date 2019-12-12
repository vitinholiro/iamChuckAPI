//
// Properties

const HomeRoutes = require('express').Router();
const BFFComponents = require('./../bff/components/bff-components')
const { BFFLabelProperties } = require('./../bff/components/label/bff-label-model')
const BFFPayload = require('./../bff/components/bff-payload')

HomeRoutes.get('/searched-jokes', (req, res) => {
    
    const label = BFFComponents.generateLabelWith(
        'Chuck Norris has so many friends on facebook, he needs 3 accounts',
        new BFFLabelProperties("#000000", 16, "medium")
    )

    res.json(BFFPayload.components({
        label
    }))
})

module.exports = HomeRoutes
import express = require('express');
import { BFFComponents } from './../bff/components/bff-components'
import { BFFPayload } from './../bff/components/bff-payload'
import { BFFLabelProperties } from './../bff/components/label/model/bff-label-model'

//
// Properties

const HomeRoutes = express.Router()

// Routes

HomeRoutes.get('/searched-jokes', (req, res) => {
    const bffComponents = new BFFComponents()
    const bffPayload = new BFFPayload()

    const label = bffComponents.generateLabelWith(
        'Chuck Norris has so many friends on facebook, he needs 3 accounts',
        new BFFLabelProperties("#000000", 16, "medium")
    )

    res.json(bffPayload.view({label}))
})

export = HomeRoutes 
import express = require('express');
import { BFFComponents, TypeComponent } from './../bff/components/bff-components'
import { BFFPayload } from './../bff/components/bff-payload'
import { BFFTextProperties } from '../bff/components/text-components/interface/text-component-interface'

// MARK: Properties

const HomeRoutes = express.Router()

// MARK: Routes

HomeRoutes.get('/searched-jokes', (req, res) => {
    const bffComponents = new BFFComponents()
    const bffPayload = new BFFPayload()

    const label = bffComponents.text(TypeComponent.label,
        "Chuck Norris has so many friends on facebook, he needs 3 accounts",
         new BFFTextProperties("#00000", 15, "REGULAR")
    )

    res.json(bffPayload.view({label}))
})

export = HomeRoutes 
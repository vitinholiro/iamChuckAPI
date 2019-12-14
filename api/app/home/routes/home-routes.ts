import express = require('express');
import { BFFComponents, TypeComponent } from '../../../bff/components/bff-components'
import { BFFPayload } from '../../../bff/components/bff-payload'
import { BFFTextProperties } from '../../../bff/components/text-components/interface/text-component-interface'
import HomeModel from './../model/home-model'
import HomeController from './../controller/home-controller'
import { BFFLabel, BFFTextComponent } from '../../../bff/components/text-components/label/bff-label';

// MARK: Properties

const HomeRoutes = express.Router()

// MARK: Routes

HomeRoutes.get('/home/searched-jokes', async (req, res) => {
    const bffComponents = new BFFComponents()
    const bffPayload = new BFFPayload()

    const JokesArray = await new HomeController().get()
    var labels: Array<BFFTextComponent> = []

    JokesArray.forEach( (joke) => {
        labels.push(
            bffComponents.text(TypeComponent.label,
                joke.value,
                new BFFTextProperties("#00000", 15, "REGULAR")
            )
        )
    })

    res.json(bffPayload.view({labels}))
})

HomeRoutes.post('/home/save', async (req, res) => {
    const body  = req.body
    const homeModel = new HomeModel(body)
    console.log(homeModel)

    try {
        let saveHomeModel = await new HomeController().save(homeModel)
        res.sendStatus(201).json(saveHomeModel)
    } catch(e) {
        res.sendStatus(400).send(e)
    }
})

export = HomeRoutes 
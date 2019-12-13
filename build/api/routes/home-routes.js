"use strict";
var express = require("express");
var bff_components_1 = require("./../bff/components/bff-components");
var bff_payload_1 = require("./../bff/components/bff-payload");
var bff_label_model_1 = require("./../bff/components/label/model/bff-label-model");
//
// Properties
var HomeRoutes = express.Router();
// Routes
HomeRoutes.get('/searched-jokes', function (req, res) {
    var bffComponents = new bff_components_1.BFFComponents();
    var bffPayload = new bff_payload_1.BFFPayload();
    var label = bffComponents.generateLabelWith('Chuck Norris has so many friends on facebook, he needs 3 accounts', new bff_label_model_1.BFFLabelProperties("#000000", 16, "medium"));
    res.json(bffPayload.view({ label: label }));
});
module.exports = HomeRoutes;

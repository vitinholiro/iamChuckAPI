"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bff_label_model_1 = require("./model/bff-label-model");
var BFFLabel = /** @class */ (function () {
    // MARK: Initializers
    function BFFLabel(value, properties) {
        this.value = value;
        this.properties = properties;
        this.value = value;
        this.properties = properties;
    }
    // MARK: Functions
    BFFLabel.prototype.generate = function () {
        return new bff_label_model_1.BFFLabelModel(this.value, this.properties);
    };
    return BFFLabel;
}());
exports.BFFLabel = BFFLabel;

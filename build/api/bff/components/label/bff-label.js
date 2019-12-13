"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bff_label_model_1 = require("./model/bff-label-model");
var BFFLabel = /** @class */ (function () {
    function BFFLabel() {
    }
    // MARK: Functions
    BFFLabel.prototype.generateWith = function (value, properties) {
        return new bff_label_model_1.BFFLabelModel(value, properties);
    };
    return BFFLabel;
}());
exports.BFFLabel = BFFLabel;

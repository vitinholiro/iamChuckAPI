"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bff_label_1 = require("./label/bff-label");
var BFFComponents = /** @class */ (function () {
    // MARK: Initializers
    function BFFComponents() {
    }
    // MARK: Functions
    BFFComponents.prototype.generateLabelWith = function (value, properties) {
        return new bff_label_1.BFFLabel().generateWith(value, properties);
    };
    return BFFComponents;
}());
exports.BFFComponents = BFFComponents;

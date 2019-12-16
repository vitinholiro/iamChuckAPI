"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bff_label_1 = require("./text-components/label/bff-label");
// MARK: Enums
var TypeComponent;
(function (TypeComponent) {
    TypeComponent[TypeComponent["label"] = 0] = "label";
})(TypeComponent = exports.TypeComponent || (exports.TypeComponent = {}));
var BFFComponents = /** @class */ (function () {
    // MARK: Initializers
    function BFFComponents() {
    }
    // MARK: Functions
    BFFComponents.prototype.text = function (component, value, properties) {
        switch (component) {
            case TypeComponent.label:
                return new bff_label_1.BFFLabel(value, properties).generate();
        }
    };
    return BFFComponents;
}());
exports.BFFComponents = BFFComponents;

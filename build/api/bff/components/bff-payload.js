"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_component_interface_1 = require("./view-components/interface/view-component-interface");
var BFFPayload = /** @class */ (function () {
    function BFFPayload() {
    }
    BFFPayload.prototype.components = function (items) {
        return {
            components: [
                items
            ]
        };
    };
    BFFPayload.prototype.view = function (items) {
        return {
            view: this.components(items),
            properties: view_component_interface_1.BFFViewProperties
        };
    };
    return BFFPayload;
}());
exports.BFFPayload = BFFPayload;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            view: this.components(items)
        };
    };
    return BFFPayload;
}());
exports.BFFPayload = BFFPayload;

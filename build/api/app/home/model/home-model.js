"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var HomeSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    categories: [{
            type: String,
            required: true,
            unique: true
        }],
    icon_url: {
        type: String
    },
    url: {
        type: String
    },
    value: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('Home', HomeSchema);

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddQRCode = getAddQRCode;
const qrcode_1 = __importDefault(require("qrcode"));
function getAddQRCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const qrCode = yield qrcode_1.default.toDataURL(req.params.uuid, {
                margin: 0,
            });
            return res.status(200).json(qrCode);
        }
        catch (error) {
            return res.status(500);
        }
    });
}

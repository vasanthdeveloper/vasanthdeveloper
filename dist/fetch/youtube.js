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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
function fetch() {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = (yield axios_1.default.get('https://www.youtube.com/channel/UCo6K7mx7gWKbXbpQAMrvFwg/videos')).data;
        const parsed = cheerio_1.default.load(resp);
        const titles = parsed('.yt-lockup').find('.yt-lockup-title a');
        const keys = Object.keys(titles);
        const returnable = [];
        keys.forEach(id => {
            const parsed = Number(id);
            if ((parsed && parsed < 5) || id == '0') {
                returnable.push({
                    title: titles[parsed].attribs.title,
                    link: `https://youtube.com${titles[parsed].attribs.href}`,
                });
            }
        });
        return returnable;
    });
}
exports.default = fetch;

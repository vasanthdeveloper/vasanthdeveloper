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
const ora_1 = __importDefault(require("ora"));
const github_1 = __importDefault(require("./github"));
const youtube_1 = __importDefault(require("./youtube"));
function fetch(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinner = ora_1.default();
        if (!options.json) {
            console.clear();
            spinner.start('Loading');
        }
        const data = yield Promise.all([github_1.default(), youtube_1.default()]);
        if (!options.json) {
            spinner.stop();
        }
        return data;
    });
}
exports.default = fetch;

#!/usr/bin/env node
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
const commander_1 = __importDefault(require("commander"));
const node_emoji_1 = __importDefault(require("node-emoji"));
const main_1 = __importDefault(require("./main"));
const appData = require('../../package.json');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        process.title = 'vasanthdeveloper';
        const app = new commander_1.default.Command('vasanthdeveloper');
        app.description(node_emoji_1.default.strip(appData.description))
            .version(`${appData.name} v${appData.version}`)
            .option('-J, --json', 'output in JSON format')
            .action(() => main_1.default(app.opts()));
        app.parse(process.argv);
    });
}
main();

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
const boxen_1 = __importDefault(require("boxen"));
const chalk_1 = __importDefault(require("chalk"));
const table_1 = require("table");
const index_1 = __importDefault(require("./fetch/index"));
function start(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield index_1.default(options);
        const tableString = [
            [chalk_1.default.bold.blueBright('Projects'), chalk_1.default.bold.blueBright('Videos')],
            ['', ''],
        ];
        for (let index = 0; index < 5; index++) {
            tableString.push([
                `${chalk_1.default.greenBright(data[0][index].name)}\n${data[0][index].link}`,
                `${chalk_1.default.greenBright(data[1][index].title)}\n${data[1][index].link}`,
            ]);
            tableString.push(['', '']);
        }
        const projectsAndVideos = boxen_1.default(table_1.table(tableString, {
            border: table_1.getBorderCharacters(`void`),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            drawHorizontalLine: () => {
                return false;
            },
        }), {
            float: 'center',
            margin: 0,
            padding: 1,
            dimBorder: true,
            borderColor: 'gray',
        });
        const socialLinks = table_1.table([
            [
                chalk_1.default.bold('Twitter:'),
                `${chalk_1.default.gray('https://twitter.com/')}${chalk_1.default.blueBright('vasanthdevelop')}`,
            ],
            [
                chalk_1.default.bold('npm:'),
                `${chalk_1.default.gray('https://npmjs.com/~')}${chalk_1.default.red('vasanthdeveloper')}`,
            ],
            [
                chalk_1.default.bold('GitHub:'),
                `${chalk_1.default.gray('https://github.com/')}vasanthdeveloper`,
            ],
            [
                chalk_1.default.bold('YouTube:'),
                `${chalk_1.default.gray('https://youtube.com/')}${chalk_1.default.redBright('vasanthdeveloper')}`,
            ],
            [
                chalk_1.default.bold('Discord:'),
                `${chalk_1.default.gray('https://discord.gg/')}${chalk_1.default.blue('w2WvRhr')}`,
            ],
        ], {
            border: table_1.getBorderCharacters(`void`),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            drawHorizontalLine: () => {
                return false;
            },
        });
        const appString = `${chalk_1.default.underline(`Vasanth Srivatsa ${chalk_1.default.bold.cyanBright('//')} vasanthdeveloper`)}`
            .concat('\n\n')
            .concat(socialLinks.slice(0, -1));
        const app = boxen_1.default(appString, {
            float: 'center',
            margin: 0,
            padding: 1,
            borderStyle: "bold",
            borderColor: 'cyanBright',
            dimBorder: true,
            align: 'center',
        });
        console.log('\n\n');
        console.log(app);
        console.log(projectsAndVideos);
        console.log('\n\n');
    });
}
exports.default = start;

import boxen from 'boxen'
import chalk from 'chalk'
import { table, getBorderCharacters } from 'table'

import fetch from './fetch/index'

export default async function start(options: any): Promise<void> {
    const data = await fetch(options)

    const tableString = [
        [chalk.bold.blueBright('Projects'), chalk.bold.blueBright('Videos')],
        ['', ''],
    ]

    for (let index = 0; index < 5; index++) {
        tableString.push([
            `${chalk.greenBright(data[0][index].name)}\n${data[0][index].link}`,
            `${chalk.greenBright(data[1][index].title)}\n${
                data[1][index].link
            }`,
        ])
        tableString.push(['', ''])
    }

    const projectsAndVideos = boxen(
        table(tableString, {
            border: getBorderCharacters(`void`),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            drawHorizontalLine: () => {
                return false
            },
        }),
        {
            float: 'center',
            margin: 0,
            padding: 1,
            dimBorder: true,
            borderColor: 'gray',
        },
    )

    const socialLinks = table(
        [
            [
                chalk.bold('Twitter:'),
                `${chalk.gray('https://twitter.com/')}${chalk.blueBright(
                    'vasanthdevelop',
                )}`,
            ],
            [
                chalk.bold('npm:'),
                `${chalk.gray('https://npmjs.com/~')}${chalk.red(
                    'vasanthdeveloper',
                )}`,
            ],
            [
                chalk.bold('GitHub:'),
                `${chalk.gray('https://github.com/')}vasanthdeveloper`,
            ],
            [
                chalk.bold('YouTube:'),
                `${chalk.gray('https://youtube.com/')}${chalk.redBright(
                    'vasanthdeveloper',
                )}`,
            ],
            [
                chalk.bold('Discord:'),
                `${chalk.gray('https://discord.gg/')}${chalk.blue('w2WvRhr')}`,
            ],
        ],
        {
            border: getBorderCharacters(`void`),
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1,
            },
            drawHorizontalLine: () => {
                return false
            },
        },
    )

    // prepare the main box
    const appString = `${chalk.underline(
        `Vasanth Srivatsa ${chalk.bold.cyanBright('//')} vasanthdeveloper`,
    )}`
        .concat('\n\n')
        .concat(socialLinks.slice(0, -1))

    const app = boxen(appString, {
        float: 'center',
        margin: 0,
        padding: 1,
        borderStyle: boxen.BorderStyle.Bold,
        borderColor: 'cyanBright',
        dimBorder: true,
        align: 'center',
    })

    console.log('\n\n')
    console.log(app)
    console.log(projectsAndVideos)
    console.log('\n\n')
}

#!/usr/bin/env node
//   ___    __________   |  Vasanth Developer (Vasanth Srivatsa)
//   __ |  / /___  __ \  |  ------------------------------------------------
//   __ | / / __  / / /  |  https://github.com/vasanthdeveloper/vasanthdeveloper.git
//   __ |/ /  _  /_/ /   |
//   _____/   /_____/    |  Executable entryfile for vasanthdeveloper
//                       |

import commander from 'commander'
import emoji from 'node-emoji'

import action from './main'

// load the package.json information
const appData = require('../package.json')

async function main(): Promise<void> {
    // set process's title
    process.title = 'vasanthdeveloper'

    // create a root command
    const app = new commander.Command('vasanthdeveloper')
    app.description(emoji.strip(appData.description))
        .version(`${appData.name} v${appData.version}`)
        .option('-J, --json', 'output in JSON format')
        .action(() => action(app.opts()))

    // parse the arguments
    app.parse(process.argv)
}

main()

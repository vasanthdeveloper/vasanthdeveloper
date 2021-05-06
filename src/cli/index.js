/*
 *  Loads and parsers command line arguments.
 *  Created On 03 May 2021
 */

import commandLineArgs from 'command-line-args'
import commandLineCommands from 'command-line-commands'
import dirname from 'es-dirname'
import glob from 'glob'
import path from 'path'

import { loadDefaultArgs } from './defaults.js'

export default async () => {
    // load the default arguments
    // that are added to every command
    const dargs = await loadDefaultArgs()

    // a global variable where we'll store
    // all the command in memory
    global.cmds = []
    const files = glob.sync(path.join(dirname(), '..', 'cmds', '*', 'index.js'))

    // loop through each command and load them into memory
    for (const file of files) {
        const { default: cmd } = await import(file)
        cmd['name'] = path.basename(path.join(file, '..'))

        // add default args
        cmd.args = cmd.args ? cmd.args.concat(dargs) : dargs

        global.cmds.push(cmd)
    }

    // loop through commands in memory
    // and get all the valid command
    // names
    const valid = [null]
    for (const cmd of global.cmds) valid.push(cmd.name)

    // parse the commands
    const { command, argv } = commandLineCommands(valid)

    const cmd = {
        ...global.cmds.find(cmd => cmd.name == (command || 'index')),
        ...{ argv },
    }

    // parse the command line arguments
    // for that given command
    cmd.argv = commandLineArgs(cmd.args, {
        argv: cmd.argv,
        camelCase: true,
    })

    // first, run all the option's actions!
    for (const key in cmd.argv) {
        const arg = cmd.args.find(arg => arg.name == key)

        if (!arg || !arg.action) continue
        await arg.action(cmd)
    }

    // run the action tied to this command
    await cmd.action(cmd)
}

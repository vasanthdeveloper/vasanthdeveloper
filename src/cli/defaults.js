/*
 *  Loads default args and cmds from the current folder.
 *  Created On 03 May 2021
 */

import dirname from 'es-dirname'
import glob from 'glob'
import path from 'path'

export const loadDefaultArgs = async () => {
    const returnable = []
    const files = glob.sync(path.join(dirname(), 'args', '*', 'index.js'))

    for (const file of files) {
        const { default: arg } = await import(file)

        returnable.push(arg)
    }

    return returnable
}

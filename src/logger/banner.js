/*
 *  Logs the header message upon execution.
 *  Created On 07 May 2021
 */

import chalk from 'chalk'
import emoji from 'node-emoji'

export const header = () => {
    const { name, bio } = global.profile

    const text = [
        `Hey :wave:, ${chalk.bold.hex('#FFFFFF')("I'm " + name)}`,
        `${bio}`,
    ]

    console.log(emoji.emojify(text.join('\n')).concat('\n'))
}

export const footer = () => {
    const { displayName, email } = global.profile

    const text = [
        `${chalk.bold.whiteBright(displayName)} ${chalk.gray(
            '<' + chalk.underline(email) + '>',
        )}`,
    ]

    console.log(emoji.emojify(text.join('\n')))
}

/*
 *  Prints the help message for a given command and exits.
 *  Created On 04 May 2021
 */

const action = async cmd => {
    console.log('show the help and exit')
    process.exit(0)
}

export default {
    action,
    alias: 'h',
    name: 'help',
    type: Boolean,
    description: 'Shows the help message and exits',
}

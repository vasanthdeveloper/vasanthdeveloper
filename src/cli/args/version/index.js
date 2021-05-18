/*
 *  Prints the application version when given a flag.
 *  Created On 03 May 2021
 */

const action = ({ argv }) => {
    console.log('show app version and exit')
    console.log('')
    process.exit(0)
}

export default {
    action,
    name: 'version',
    type: Boolean,
    description: 'Shows the app version and exits',
}

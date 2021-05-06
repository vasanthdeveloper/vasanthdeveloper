/*
 *  Opens Vasanth's social media pages.
 *  Created On 03 May 2021
 */

import open from 'open'

const action = async cmd => {
    // check if the user has passed any websites
    if (!cmd.argv.websites) {
        console.log('no websites provided')
        process.exit(0)
    }

    // grab my social links
    const { social } = global.profile

    // loop through each link and open them
    // in the default browser of the user
    for (const website of cmd.argv.websites) {
        const url = social[website]

        // handle when I don't have a profile
        // in that website/service
        if (!url) {
            console.log(`No website in ${website}`)
            process.exit(0)
        }

        // check whether to open it or log it
        if (cmd.argv.show) {
            console.log(url)
        } else {
            await open(url)
        }
    }
}

export default {
    action,
    description: `Opens Vasanth's social media pages.`,
    args: [
        {
            alias: 'w',
            type: String,
            multiple: true,
            name: 'websites',
            defaultOption: true,
        },
        {
            alias: 's',
            name: 'show',
            type: Boolean,
            defaultValue: false,
        },
    ],
}

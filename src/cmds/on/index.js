/*
 *  Opens Vasanth's social media pages.
 *  Created On 03 May 2021
 */

const action = async cmd => {
    console.log('hit')
}

export default {
    action,
    description: `Opens Vasanth's social media pages.`,
    args: [
        {
            name: 'show',
            alias: 's',
            type: Boolean,
            defaultOption: false,
        },
    ],
}

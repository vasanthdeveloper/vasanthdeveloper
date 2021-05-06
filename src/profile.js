/*
 *  Fetches basic profile information before executing anything.
 *  Created On 06 May 2021
 */

import utilities from '@vasanthdeveloper/utilities'
import axios from 'axios'

export let get = async url => {
    const res = await utilities.promise.handle(
        axios({
            method: 'GET',
            url,
        }),
    )

    return res.error || res.returned.data
}

export default async () => {
    global.profile = await get('/')
}

// This files shows a spinner until all the data is fetched

import ora from 'ora'

import github, { ProjectImpl } from './github'
import youtube, { VideoImpl } from './youtube'

export default async function fetch(
    options: any,
): Promise<[ProjectImpl[], VideoImpl[]]> {
    // we we aren't going to output JSON
    // then show a simple spinner
    const spinner = ora()

    if (!options.json) {
        console.clear()
        spinner.start('Loading')
    }

    // asynchronously send HTTP requests to both the websites
    // and then resolve with they resolve
    const data = await Promise.all([github(), youtube()])

    if (!options.json) {
        spinner.stop()
    }

    return data
}

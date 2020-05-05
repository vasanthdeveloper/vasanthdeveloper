// This file fetches and returns my top 5 latest YouTube videos

import axios from 'axios'
import cheerio from 'cheerio'

export interface VideoImpl {
    title: string
    link: string
}

export default async function fetch(): Promise<VideoImpl[]> {
    const resp = (
        await axios.get(
            'https://www.youtube.com/channel/UCo6K7mx7gWKbXbpQAMrvFwg/videos',
        )
    ).data

    const parsed = cheerio.load(resp)

    const titles = parsed('.yt-lockup').find('.yt-lockup-title a')
    const keys = Object.keys(titles)

    // the variable that can be returned
    const returnable: VideoImpl[] = []

    keys.forEach(id => {
        const parsed = Number(id)

        if ((parsed && parsed < 5) || id == '0') {
            returnable.push({
                title: titles[parsed].attribs.title,
                link: `https://youtube.com${titles[parsed].attribs.href}`,
            })
        }
    })

    // return the returnable
    return returnable
}

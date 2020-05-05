// This file fetches my top 5 projects from GitHub

import GitHub from 'github-api'

export interface ProjectImpl {
    name: string
    link: string
}

export default async function fetch(): Promise<ProjectImpl[]> {
    const gh = new GitHub()
    const user = await gh.getUser('vasanthdeveloper')
    const projects = (await user.listRepos()).data

    // the variable that can be returned
    const returnable: ProjectImpl[] = []

    // loop through all the repositories
    projects.forEach((project, index) => {
        // prevent this project from appearing
        if (project.name != 'vasanthdeveloper' && index < 6) {
            returnable.push({
                name: project.name,
                link: project.html_url,
            })
        }
    })

    // return the returnable
    return returnable
}

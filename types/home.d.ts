type aboutContent = {
    shortDescription: string,
    verboseDescription: string
}

type teamContent = {
    firstName: string,
    lastName: string,
    job: string,
    imagePath: string
    description: string
}

type allTeamContent = {
    allTeams: Array<teamContent>
}
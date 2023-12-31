type lowHighResImagePaths = {
    lowResImagePath: string,
    highResImagePath: string
}

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

type learnMoreButton = {
    name: string,
    path: string
}

type learnMoreButtons = {
    allButtons: Array<learnMoreButton>
}

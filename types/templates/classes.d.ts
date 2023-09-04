type classInfo = {
    style: string,
    day: string,
    time: string,
    address: string,
    pricePerWeek: string,
}

type allClassInfo = {
    description: string,
    allClasses: Array<classInfo>,
    eventsLink: string,
}

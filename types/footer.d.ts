type footerLink = {
    name: string,
    path: string
}

type footerLinks = {
    title: string,
    links: Array<footerLink>
}

type allFooterLinks = {
    footerLinks: Array<footerLinks>
}
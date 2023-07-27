type footerLink = {
    name: string,
    path: string
}

type footerLinks = {
    title: footerLink,
    links: Array<footerLink>
}

type allFooterLinks = {
    footerLinks: Array<footerLinks>
}
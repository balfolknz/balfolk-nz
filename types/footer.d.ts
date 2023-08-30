type footerLink = {
  name: string;
  path: string;
};

type footerLinks = {
  title: footerLink;
  links: Array<footerLink>;
};

type allFooterLinks = {
  left: Array<footerLinks>;
  center: Array<footerLinks>;
  right: Array<footerLinks>;
};

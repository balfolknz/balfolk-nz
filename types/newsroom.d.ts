type newsroomAboutContent = {
  description: string;
};

type pressMention = {
  title: string;
  author: string;
  company: string;
  date: string;
  shortDescription: string;
  link: string;
}

type allPressMentions = {
  allPressMentions: Array<pressMention>
}

type kitData = {
  name: string,
  downloadPath: string
}

type mediaEnquiriesInfo = {
  contactEmails: Array<string>;
  imagePath: string;
};

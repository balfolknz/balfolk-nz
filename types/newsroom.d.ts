type newsroomAboutContent = {
  description: string;
};

type pressMention = {
  title: string;
  author: string;
  date: string;
  shortDescription: string;
  link: string;
}

type allPressMentions = {
  allPressMentions: Array<pressMention>
}

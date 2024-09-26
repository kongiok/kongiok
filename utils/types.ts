export type Label = {
  title: string;
  description: string;
  disabled?: boolean;
};

export type Link = Label & {
  icon?: string;
  url: string;
};

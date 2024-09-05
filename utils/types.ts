export type ItemBase = {
  title: string;
  description: string;
};
export type ItemOptional = {
  image?: string;
  icon?: string;
  disabled?: boolean;
};
export type Item = ItemBase & ItemOptional;
export type Link = Item & {
  url: string;
};

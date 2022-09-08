export class Article {
  type?: MediaType | null;
  contents?: { title: string; description: string; img: string }[];
}

export enum MediaType {
  medium,
  linkedIn,
  scoop,
}

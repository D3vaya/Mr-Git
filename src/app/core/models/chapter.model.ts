export interface Chapter {
  path: string;
  icon: string;
  title: string;
  open: boolean;
  subChapter: Chapter[];
}

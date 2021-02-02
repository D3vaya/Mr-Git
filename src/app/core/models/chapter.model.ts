export interface Chapter {
  path: string;
  icon: string;
  class: string;
  title: string;
  open: boolean;
  subChapter: Chapter[];
}

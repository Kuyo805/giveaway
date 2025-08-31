export interface ArticleType {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  position: number;
  status: string;
  introduction: string;
  content: string;
  tags: string[];
  outstand: boolean;
}
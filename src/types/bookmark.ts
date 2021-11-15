export interface Category {
  id: string;
  name: string;
  color: string | null;
}

export type Bookmark = {
  id: string;
  name: string;
  url: string;
  icon?: string;
  category?: Category;
};

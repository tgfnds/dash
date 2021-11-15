import { Bookmark, Category } from './bookmark';

export type BookmarkState = {
  bookmarks: Bookmark[];
  categories: Category[];
  isModalVisible: boolean;
};

export type AppState = {
  bookmarkState: BookmarkState;
};

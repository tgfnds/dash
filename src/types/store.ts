import { Bookmark } from './bookmark';

export type BookmarkState = {
  bookmarks: Bookmark[];
  isModalVisible: boolean;
};

export type AppState = {
  bookmarkState: BookmarkState;
};

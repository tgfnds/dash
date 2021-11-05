import { Bookmark } from './bookmark';

export type BookmarkState = {
  bookmarks: Bookmark[];
  isShowingModal: boolean;
  showAddModal: () => void;
  hideAddModal: () => void;
  addBookmark: (bookmark: Bookmark) => void;
  delBookmark: (id: number) => void;
};

export type AppState = {
  bookmarkState: BookmarkState;
};

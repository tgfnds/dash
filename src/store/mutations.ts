import { Bookmark, Category } from '@/types/bookmark';
import { BookmarkState } from '@/types/store';
import { MutationTree } from 'vuex';
import {
  ADD_BOOKMARK,
  ADD_CATEGORY,
  CLOSE_BOOKMARK_MODAL,
  DEL_BOOKMARK,
  DEL_CATEGORY,
  LOAD_BOOKMARKS,
  LOAD_CATEGORIES,
  OPEN_BOOKMARK_MODAL,
} from './mutationTypes';

export const mutations: MutationTree<BookmarkState> = {
  // Bookmarks
  [LOAD_BOOKMARKS](state, bookmarks: Bookmark[]) {
    state.bookmarks = bookmarks;
  },
  [ADD_BOOKMARK](state, bookmark: Bookmark) {
    state.bookmarks.push(bookmark);
    state.isModalVisible = false;
  },
  [DEL_BOOKMARK](state, id: string) {
    state.bookmarks.filter((bm) => bm.id !== id);
  },
  [OPEN_BOOKMARK_MODAL](state) {
    state.isModalVisible = true;
  },
  [CLOSE_BOOKMARK_MODAL](state) {
    state.isModalVisible = false;
  },
  // Categories
  [LOAD_CATEGORIES](state, categories: Category[]) {
    state.categories = categories;
  },
  [ADD_CATEGORY](state, category: Category) {
    state.categories.push(category);
  },
  [DEL_CATEGORY](state, id: string) {
    state.categories.filter((cat) => cat.id !== id);
  },
};

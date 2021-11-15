import { loadStorage, saveStorage } from '@/api/localStorage';
import { BOOKMARK_STORAGE_KEY, CATEGORY_STORAGE_KEY } from '@/constants';
import { Bookmark, Category } from '@/types/bookmark';
import { initialBookmarks, initialCategories } from './mockedData';
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
import { ActionTree } from 'vuex';
import { BookmarkState } from '@/types/store';

export const actions: ActionTree<BookmarkState, BookmarkState> = {
  // Bookmarks
  addBookmark({ commit, state }, newBookmark: Bookmark) {
    commit(ADD_BOOKMARK, newBookmark);
    const bookmarks = [...state.bookmarks, newBookmark];
    saveStorage<Bookmark[]>(BOOKMARK_STORAGE_KEY, bookmarks);
  },
  delBookmark({ commit }, id: string) {
    commit(DEL_BOOKMARK, id);
  },
  openBookmarkModal({ commit }) {
    commit(OPEN_BOOKMARK_MODAL);
  },
  closeBookmarkModal({ commit }) {
    commit(CLOSE_BOOKMARK_MODAL);
  },
  loadBookmarks({ commit }) {
    const data = loadStorage<Bookmark[]>(
      BOOKMARK_STORAGE_KEY,
      initialBookmarks
    );
    if (data !== null) {
      commit(LOAD_BOOKMARKS, data);
    }
  },
  // Categories
  loadCategories({ commit }) {
    const data = loadStorage<Category[]>(
      CATEGORY_STORAGE_KEY,
      initialCategories
    );
    if (data !== null) {
      commit(LOAD_CATEGORIES, data);
    }
  },
  addCategory({ commit, state }, newCategory: Category) {
    commit(ADD_CATEGORY, newCategory);
    const categories = [...state.categories, newCategory];
    saveStorage<Category[]>(CATEGORY_STORAGE_KEY, categories);
  },
  delCategory({ commit }, id: string) {
    commit(DEL_CATEGORY, id);
  },
};

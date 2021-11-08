import { loadStorage } from '@/api/localStorage';
import { BOOKMARK_STORAGE_KEY } from '@/constants';
import { Bookmark } from '@/types/bookmark';
import { initialBookmarks } from './mockedData';
import {
  ADD_BOOKMARK,
  CLOSE_BOOKMARK_MODAL,
  DEL_BOOKMARK,
  LOAD_BOOKMARKS,
  OPEN_BOOKMARK_MODAL,
} from './mutationTypes';
import { ActionTree } from 'vuex';
import { BookmarkState } from '@/types/store';

export const actions: ActionTree<BookmarkState, BookmarkState> = {
  addBookmark({ commit }, newBookmark: Bookmark) {
    commit(ADD_BOOKMARK, newBookmark);
  },
  delBookmark({ commit }, id: number) {
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
};

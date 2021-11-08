import { Bookmark } from '@/types/bookmark';
import { BookmarkState } from '@/types/store';
import { MutationTree } from 'vuex';
import {
  ADD_BOOKMARK,
  CLOSE_BOOKMARK_MODAL,
  DEL_BOOKMARK,
  LOAD_BOOKMARKS,
  OPEN_BOOKMARK_MODAL,
} from './mutationTypes';

export const mutations: MutationTree<BookmarkState> = {
  [LOAD_BOOKMARKS](state, bookmarks: Bookmark[]) {
    state.bookmarks = bookmarks;
  },
  [ADD_BOOKMARK](state, bookmark: Bookmark) {
    console.log(bookmark);
    const maxId = state.bookmarks.reduce((prev, cur) =>
      cur.id && prev.id && cur.id > prev.id ? cur : prev
    ).id;
    const newId = maxId ? maxId + 1 : 1;
    bookmark.id = newId;
    state.bookmarks.push(bookmark);
    state.isModalVisible = false;
  },
  [DEL_BOOKMARK](state, id: number) {
    state.bookmarks.filter((bm) => bm.id !== id);
  },
  [OPEN_BOOKMARK_MODAL](state) {
    state.isModalVisible = true;
  },
  [CLOSE_BOOKMARK_MODAL](state) {
    state.isModalVisible = false;
  },
};

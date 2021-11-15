import { InjectionKey } from 'vue';
import { BookmarkState } from '@/types/store';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';

export const key: InjectionKey<Store<BookmarkState>> = Symbol();

export default createStore<BookmarkState>({
  state: {
    bookmarks: [],
    categories: [],
    isModalVisible: false,
  },
  mutations: mutations,
  actions: actions,
  modules: {},
});

export const useStore = () => baseUseStore(key);

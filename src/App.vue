<template>
  <Header />
  <BookmarkList />
  <BookmarkModal v-if="bookmarkState.isShowingModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import BookmarkList from './components/BookmarkList.vue';
import BookmarkModal from './components/BookmarkModal.vue';
import { initialBookmarks, store } from './store';
import { loadStorage } from './api/localStorage';
import { Bookmark } from './types/bookmark';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    BookmarkList,
    BookmarkModal,
  },
  data() {
    return {
      bookmarkState: store.bookmarkState,
    };
  },
  mounted() {
    this.bookmarkState.bookmarks =
      loadStorage<Bookmark[]>('bookmarks', initialBookmarks) ?? [];
  },
});
</script>

<style lang="scss">
@import './shared.scss';

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: CodeNewRoman Nerd Font Mono, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: $bgColor1;
}
</style>

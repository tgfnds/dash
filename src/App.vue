<template>
  <Header />
  <BookmarkList />
  <BookmarkModal v-if="showModal" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Header from './components/Header.vue';
import BookmarkList from './components/BookmarkList.vue';
import BookmarkModal from './components/BookmarkModal.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    BookmarkList,
    BookmarkModal,
  },
  setup() {
    const store = useStore();

    let showModal = computed(() => store.state.isModalVisible);

    return { showModal };
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

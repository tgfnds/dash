<template>
  <n-config-provider :theme="darkTheme">
    <Header />
    <BookmarkList />
    <BookmarkModal v-if="isModalVisible" />
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Header from './components/Header.vue';
import BookmarkList from './components/BookmarkList.vue';
import BookmarkModal from './components/BookmarkModal.vue';
import {
  NConfigProvider,
  NGlobalStyle,
  darkTheme,
  GlobalThemeOverrides,
} from 'naive-ui';
import { useStore } from '@/store';

// const themeOverrides: GlobalThemeOverrides = {};

export default defineComponent({
  name: 'App',
  components: {
    NConfigProvider,
    NGlobalStyle,
    Header,
    BookmarkList,
    BookmarkModal,
  },
  setup() {
    const store = useStore();

    const isModalVisible = computed(() => store.state.isModalVisible);

    return {
      isModalVisible,
      darkTheme,
    };
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
  // font-family: CodeNewRoman Nerd Font Mono, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>

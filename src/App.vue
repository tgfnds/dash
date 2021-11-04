<template>
  <Header />
  <BookmarkList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookmarkList from './components/BookmarkList.vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    BookmarkList,
  },
});
</script>

<style lang="scss">
@import './shared.scss';

html,
body {
  margin: 0;
  padding: 0;
  background-color: $bgColor1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

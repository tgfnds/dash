<template>
  <ul class="bookmarks">
    <a
      class="bookmark"
      v-for="bookmark in bookmarks"
      :href="bookmark.url"
      :key="bookmark.name"
    >
      <img class="bookmark-icon" :src="iconUrl(bookmark.icon)" alt="icon" />
      <div class="bookmark-name">{{ bookmark.name }}</div>
    </a>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { LOAD_BOOKMARKS } from '@/store/mutationTypes';

export default defineComponent({
  name: 'BookmarkList',
  setup() {
    const store = useStore();

    store.dispatch(LOAD_BOOKMARKS);

    let bookmarks = computed(() => store.state.bookmarks);

    const iconUrl = (icon: string) => {
      const logos = require.context('../assets/logos');
      const icons = require.context('../assets/icons');
      return icon ? logos(`./${icon}`) : icons(`./external-link.svg`);
    };

    return { bookmarks, iconUrl };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

.bookmarks {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .bookmark {
    text-decoration: none;

    &:hover > .bookmark-icon {
      border-color: #fff;
    }
    &:hover > .bookmark-name {
      color: #fff;
    }

    &-icon {
      height: 60px;
      padding: 1.4rem;
      border: 2px solid $colorPurple;
      border-radius: 4px;
    }
    &-name {
      color: $textGray;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      margin: 0.8rem 0;
      text-transform: uppercase;
      overflow: hidden;
    }
  }
}
</style>

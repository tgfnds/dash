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
import { defineComponent } from 'vue';
import { Bookmark } from '../types/bookmark';
import { loadStorage } from '../api/localStorage';

export default defineComponent({
  name: 'BookmarkList',
  components: {},
  data() {
    return {
      bookmarks: [] as Bookmark[],
    };
  },
  methods: {
    iconUrl(icon: string) {
      const images = require.context('../assets/logos');
      return images(`./${icon}`);
    },
  },
  mounted() {
    this.bookmarks = loadStorage('bookmarks', [
      {
        name: 'giantwaffle',
        url: 'https://www.twitch.tv/giantwaffle',
        icon: 'twitch-purple.svg',
        clicks: 0,
        category: 'twitch',
      },
    ] as Bookmark[]);
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
      border: 2px solid #3a2b8f;
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

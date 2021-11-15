<template>
  <div v-for="category in categories" :key="category.id" class="Category">
    <n-space align="center">
      <n-h3 class="Category-Heading" prefix="bar">{{ category.name }}</n-h3>
      <n-button
        text
        style="display: flex; margin-right: 2rem"
        @click="showAddBookmarkModal"
      >
        <NIcon size="20" align="center">
          <CirclePlusIcon />
        </NIcon>
      </n-button>
      <n-space>
        <BookmarkItem
          v-for="bookmark in bookmarksByCategory(category)"
          :key="bookmark.id"
          :bookmark="bookmark"
        />
      </n-space>
    </n-space>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import {
  LOAD_BOOKMARKS,
  LOAD_CATEGORIES,
  OPEN_BOOKMARK_MODAL,
} from '@/store/mutationTypes';
import { NH3, NSpace, NButton, NIcon } from 'naive-ui';
import { Category } from '@/types/bookmark';
import BookmarkItem from './BookmarkItem.vue';
import { CirclePlus as CirclePlusIcon } from '@vicons/tabler';

export default defineComponent({
  name: 'BookmarkList',
  components: {
    NH3,
    NSpace,
    NButton,
    NIcon,
    BookmarkItem,
    CirclePlusIcon,
  },
  setup() {
    const store = useStore();
    store.dispatch(LOAD_CATEGORIES);
    store.dispatch(LOAD_BOOKMARKS);
    const bookmarks = computed(() => store.state.bookmarks);
    const categories = computed(() => store.state.categories);
    // const iconUrl = (icon: string) => {
    //   const logos = require.context('../assets/logos');
    //   const icons = require.context('../assets/icons');
    //   return icon ? logos(`./${icon}`) : icons(`./external-link.svg`);
    // };

    function bookmarksByCategory(category: Category) {
      return bookmarks.value.filter((b) => b.category?.id === category.id);
    }

    function showAddBookmarkModal() {
      store.dispatch(OPEN_BOOKMARK_MODAL);
    }

    return {
      bookmarks,
      categories,
      bookmarksByCategory,
      showAddBookmarkModal,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

.Category {
  // display: flex;
  margin: 1.6rem 2rem;

  &-Heading {
    margin: 0;
  }
}
</style>

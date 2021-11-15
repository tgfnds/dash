<template>
  <n-button tag="a" :href="bookmark.url">
    <template #icon v-if="iconSrc">
      <img :src="iconSrc" />
    </template>
    <div>{{ bookmark.name }}</div>
  </n-button>
</template>

<script lang="ts">
import { Bookmark } from '@/types/bookmark';
import { defineComponent, onMounted, PropType, Ref, ref } from 'vue';
import { NButton } from 'naive-ui';
export default defineComponent({
  name: 'BookmarkItem',
  components: {
    NButton,
  },
  props: {
    bookmark: {
      type: Object as PropType<Bookmark>,
      required: true,
    },
  },
  setup(props): Record<string, unknown> {
    const iconSrc: Ref<string | null> = ref(null);

    async function fetchIcon(url: string) {
      const corsAnywhere = 'https://corsforall.herokuapp.com/';
      const parseUrl = new URL(url);

      try {
        const response = await fetch(
          corsAnywhere + `https://icons.duckduckgo.com/ip3/${parseUrl.host}.ico`
          // `https://s2.googleusercontent.com/s2/favicons?domain=${parseUrl.host}&sz=16`
        );

        if (response.ok) {
          const blob = await response.blob();
          const imageObjectUrl = URL.createObjectURL(blob);
          return imageObjectUrl;
        } else {
          return null;
        }
      } catch (error) {
        console.error(`Something went wrong: ${error}`);
        return null;
      }
    }

    function goto() {
      location.href = props.bookmark.url;
    }

    onMounted(async () => {
      iconSrc.value = await fetchIcon(props.bookmark.url);
    });

    return { iconSrc, goto };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';
</style>
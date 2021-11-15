<template>
  <NSpace>
    <NDropdown :options="ddOptions" placement="bottom-start">
      <NIcon size="24">
        <DotsIcon />
      </NIcon>
    </NDropdown>
  </NSpace>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { OPEN_BOOKMARK_MODAL } from '@/store/mutationTypes';
import { defineComponent, h, ref } from 'vue';
import { NDropdown, NIcon, NSpace } from 'naive-ui';
import { v4 as uuidv4 } from 'uuid';
import { Dots as DotsIcon } from '@vicons/tabler';

export default defineComponent({
  name: 'Menu',
  components: {
    NDropdown,
    NSpace,
    NIcon,
    DotsIcon,
  },
  setup() {
    const store = useStore();
    const collapsed = ref(false);
    const ddOptions = [
      {
        label: () =>
          h('div', { onClick: showAddBookmarkModal }, 'Add Bookmark'),
        key: uuidv4(),
      },
      {
        label: 'Add Category',
        key: uuidv4(),
      },
    ];

    const showAddBookmarkModal = () => {
      store.dispatch(OPEN_BOOKMARK_MODAL);
    };

    return {
      ddOptions,
      collapsed,
      showAddBookmarkModal,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

.BtnMenu {
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &-Icon {
    height: 30px;
    animation: 450ms IconTransition ease-out;
  }
}
</style>
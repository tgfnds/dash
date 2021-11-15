<template>
  <n-modal
    :show="isModalVisible"
    preset="card"
    @close="closeModal"
    style="width: 350px"
  >
    <template #header>
      <n-h2 prefix="bar" style="margin: 0">Add bookmark</n-h2>
    </template>
    <div>
      <n-form
        :model="model"
        :rules="rules"
        label-placement="left"
        :label-width="80"
        @submit="submitForm"
      >
        <n-form-item path="name" label="Name">
          <n-input v-model:value="model.name" type="text" placeholder="name" />
        </n-form-item>
        <n-form-item path="url" label="Url">
          <n-input-group>
            <n-input-group-label>https://</n-input-group-label>
            <n-input v-model:value="model.url" type="text" placeholder="url" />
          </n-input-group>
        </n-form-item>
        <n-form-item path="categoryValue" label="Category">
          <n-select
            v-model:value="model.categoryValue"
            :options="categoryOptions"
            filterable
            tag
          />
        </n-form-item>
      </n-form>
    </div>
    <template #action>
      <div style="display: flex; justify-content: flex-end">
        <n-button
          :disabled="!model.name || !model.url || !model.categoryValue"
          round
          type="primary"
          @click="submitForm"
          >Add</n-button
        >
      </div>
    </template>
  </n-modal>
</template>

<script lang="ts">
import { Bookmark, Category } from '@/types/bookmark';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import {
  ADD_BOOKMARK,
  ADD_CATEGORY,
  CLOSE_BOOKMARK_MODAL,
} from '@/store/mutationTypes';
import {
  NModal,
  NForm,
  NFormItem,
  NH2,
  NInput,
  NSelect,
  NButton,
  SelectOption,
  FormRules,
  NInputGroup,
  NInputGroupLabel,
} from 'naive-ui';
import { v4 as uuidv4 } from 'uuid';

// const getFixedUrl = (url: string) => {
//   if (!url.includes('https://') || !url.includes('http://')) {
//     return 'https://' + url;
//   } else {
//     return url;
//   }
// };

export default defineComponent({
  name: 'BookmarkModal',
  components: {
    NModal,
    NForm,
    NFormItem,
    NH2,
    NInput,
    NSelect,
    NButton,
    NInputGroup,
    NInputGroupLabel,
  },
  setup() {
    const store = useStore();
    const isModalVisible = computed(() => store.state.isModalVisible);
    const modelRef = ref({
      name: '',
      url: '',
      categoryValue: '',
    });
    const rules: FormRules = {
      name: [
        {
          required: true,
          trigger: ['blur', 'input'],
          message: 'Name is required.',
        },
      ],
      url: [
        {
          required: true,
          trigger: ['blur', 'input'],
          message: 'Url is required.',
        },
      ],
      categoryValue: [
        {
          required: true,
          message: 'Category is required.',
        },
      ],
    };
    const categoryOptions = computed(() => {
      const options = store.state.categories.map(
        (cat) =>
          ({
            label: cat.name,
            value: cat.name,
          } as SelectOption)
      );
      console.log(options);
      return options;
    });

    const submitForm = (e: Event) => {
      e.preventDefault();
      let category = store.state.categories.find(
        (cat) => cat.name === modelRef.value.categoryValue
      );
      console.log('category', category);
      if (!category) {
        category = {
          id: uuidv4(),
          name: modelRef.value.categoryValue,
          color: null,
        };
        store.dispatch(ADD_CATEGORY, category);
      }
      let newBookmark = {
        id: uuidv4(),
        name: modelRef.value.name,
        url: 'https://' + modelRef.value.url,
        category: category,
      } as Bookmark;
      console.log('newbookmark', newBookmark);
      store.dispatch(ADD_BOOKMARK, newBookmark);
    };

    const closeModal = () => store.dispatch(CLOSE_BOOKMARK_MODAL);

    return {
      isModalVisible,
      model: modelRef,
      rules,
      categoryOptions,
      submitForm,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

.modal-header {
  display: flex;
  align-items: center;
}

.Modal {
  &-Mask {
    animation: 350ms Fade ease-out;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba($color: #000000, $alpha: 0.5);

    .Modal-Wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;
      background-color: $bgColor1;
      margin: auto;
      padding: 1rem;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      color: #eee;

      .Modal-TopButtons {
        align-self: flex-end;

        button {
          cursor: pointer;
          border: 0;
          background: transparent;
        }
      }

      .Modal-Container {
        padding: 2rem 2rem;

        .Modal-Body {
          margin-top: 0.5rem;

          .Modal-Form {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}

@keyframes Fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

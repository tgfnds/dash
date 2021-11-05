<template>
  <div class="Modal-Mask">
    <div class="Modal-Wrapper">
      <div class="Modal-TopButtons">
        <button @click="closeModal">
          <img src="../assets/icons/delete.svg" />
        </button>
      </div>
      <div class="Modal-Container">
        <div class="Modal-Header">Add bookmark</div>
        <div class="Modal-Body">
          <form class="Modal-Form" @submit="submitForm">
            <input v-model.trim="name" placeholder="name" />
            <input v-model="url" placeholder="url" />
            <input type="submit" value="Add" />
          </form>
          <button>Random button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Bookmark } from '@/types/bookmark';
import { AppState } from '@/types/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookmarkModal',
  data() {
    return {
      name: '',
      url: '',
      image: '',
    };
  },
  methods: {
    submitForm(e: Event) {
      e.preventDefault();
      let newBookmark = {
        name: this.name,
        url: this.url,
      } as Bookmark;
      (this.$root?.$data as AppState).bookmarkState.addBookmark(newBookmark);
      this.closeModal();
    },
    closeModal() {
      (this.$root?.$data as AppState).bookmarkState.hideAddModal();
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

.Modal {
  &-Mask {
    animation: 350ms Fade ease-out;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);

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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
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

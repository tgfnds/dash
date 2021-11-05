<template>
  <header>
    <div class="clock">{{ clock }}</div>
    <button class="BtnMenu" @click="toggleContextMenu">
      <img
        class="BtnMenu-Icon"
        v-if="!showMenu"
        src="../assets/icons/menu.svg"
        alt="menu"
      />
      <img
        class="BtnMenu-Icon"
        v-if="showMenu"
        src="../assets/icons/delete.svg"
        alt="menu"
      />
    </button>
    <div v-if="showMenu" class="ContextMenu">
      <button @click="showAddBookmarkModal" class="ContextMenu-Option">
        Add Bookmark
      </button>
      <div class="ContextMenu-Option">test1</div>
      <div class="ContextMenu-Option">test1</div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AppState } from '../types/store';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      clock: '',
      showMenu: false,
    };
  },
  methods: {
    showAddBookmarkModal() {
      (this.$root?.$data as AppState).bookmarkState.showAddModal();
      this.showMenu = false;
    },
    toggleContextMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    setInterval(() => {
      const time = new Date();
      let hour: string | number = time.getHours();
      let min: string | number = time.getMinutes();
      let sec: string | number = time.getSeconds();

      hour = hour < 10 ? `0${hour}` : hour;
      min = min < 10 ? `0${min}` : min;
      sec = sec < 10 ? `0${sec}` : sec;

      this.clock = `${hour}:${min}:${sec}`;
    }, 1000);
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

header {
  padding: 0 1rem;
  height: $headerHeight;
  background: linear-gradient(180deg, $bgColor2 40%, $bgColor1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: $textGray;

  .clock {
    flex: 1;
  }
  .BtnMenu {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &-Icon {
      height: 30px;
      animation: 450ms IconTransition ease-out;
    }
  }

  .ContextMenu {
    margin: $headerHeight 1rem;
    position: absolute;
    top: 0;
    right: 0;
    border: 2px solid $colorPurple;
    border-radius: 4px;
    background-color: $bgColor2;
    animation: 250ms IconTransition ease-out;

    &-Option {
      cursor: pointer;
      font-size: 14px;
      border: none;
      padding: 0.8rem 2rem;
      background-color: transparent;
      color: #dddddd;

      &:hover {
        background-color: $bgColor1;
      }
    }
  }
}

@keyframes IconTransition {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
  <header>
    <div class="clock">{{ clock }}</div>
    <button class="btnMenu">
      <img src="../assets/icons/menu.svg" alt="menu" />
    </button>
    <div v-if="showMenu" class="contextMenu">
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      clock: '',
      showMenu: false,
    };
  },
  methods: {
    toggleContextMenu() {
      this.showMenu = !this.showMenu;
    }
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
  .btnMenu {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    img {
      height: 30px;
    }
  }
}
</style>

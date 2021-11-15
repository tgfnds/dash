<template>
  <header>
    <div class="clock">{{ clock }}</div>
    <Menu />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Menu from './Menu.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Menu,
  },
  setup() {
    const darkThemeActive = ref(true);
    const clock = ref('');

    setInterval(() => {
      const time = new Date();
      let hour: string | number = time.getHours();
      let min: string | number = time.getMinutes();

      hour = hour < 10 ? `0${hour}` : hour;
      min = min < 10 ? `0${min}` : min;

      clock.value = `${hour}:${min}`;
    }, 1000);

    return {
      darkThemeActive,
      clock,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../shared.scss';

header {
  padding: 0 1rem;
  height: $headerHeight;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: $textGray;

  .clock {
    flex: 1;
    text-align: center;
  }
}
</style>

<template>
  <div>
    <h1>Testing icons</h1>
    <div style="display: flex; flex-direction: column; align-items: center">
      <n-radio-group
        @update:value="onRadioGroupUpdate"
        v-model:value="selectedColor"
        name="testgroup"
      >
        <n-radio
          class="Radio-Label"
          v-for="color in colors"
          :key="color"
          :value="color"
        >
          {{ color }}
        </n-radio>
      </n-radio-group>
      <div>
        <n-icon size="60" color="purple">
          <img :ref="twitchIcon" fill="#3a2b8f" src="@sicons/fa/Twitch.svg" />
        </n-icon>
        <NIcon size="40" color="#3a2b8f">
          <img fill="#3a2b8f" src="@sicons/fa/Twitch.svg" />
        </NIcon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NRadioGroup, NRadio, NIcon } from 'naive-ui';

export default defineComponent({
  name: 'TestIcons',
  components: {
    NRadioGroup,
    NRadio,
    NIcon,
  },
  setup() {
    const selectedColor = ref('#240115');
    const colors = ['#240115', '#DE3C4B', '#87f5fb', '2f131e', '#CEC3C1'];

    function onRadioGroupUpdate(value: string) {
      // alert(value);
    }

    return {
      selectedColor,
      colors,
      onRadioGroupUpdate,
    };
  },
});
</script>

<style lang="scss" scoped>
.Icon {
  margin: 0.4rem;
  font-size: 30px;
  color: #3a2b8f;
}
</style>

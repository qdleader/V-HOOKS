<script lang="tsx" setup>
// import { useWatermark } from '@/lib/useWatermark/index';
import { onMounted } from 'vue';
import { useWatermark } from '../lib/useWaterMarkHook/index';
const { setWatermark: setGlobalWatermark } = useWatermark();
onMounted(() => {
  console.log('mounted');
  setGlobalWatermark('全局水印', {
    color: '#000',
    opacity: 0.2,
  });
});
</script>
<template>
  <div>水印</div>
</template>

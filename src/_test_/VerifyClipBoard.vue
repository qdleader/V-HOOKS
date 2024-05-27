<script lang="tsx" setup>
// import { useWatermark } from '@/lib/useWatermark/index';
import { onMounted, ref } from 'vue';
import { useClipboard } from '../lib/useClipBoard/index';

const inputText = ref('');

const { text, isSupported, copy } = useClipboard();

onMounted(() => {
  console.log('mounted');
  // const { text, isSupported, copy } = useClipboard({ read: true });
});
</script>
<template>
  <p>
    Current copied: <code>{{ text || 'none' }}</code>
  </p>
  <input v-model="inputText" type="text" />
  <button @click="copy(inputText)">Copy</button>
</template>

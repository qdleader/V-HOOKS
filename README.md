# V-HOOKS

# 水印

## useWatermark 使用
```ts
import { useWatermark } from "v-hooks"
const { setWatermark: setGlobalWatermark } = useWatermark()

setGlobalWatermark("全局水印", {
    color: '#333',
    opacity: 0.2,
})
```


# 复制剪切板

## useWatermark 使用
```ts
<script lang="tsx" setup>
import {  ref } from 'vue';
import { useClipboard } from 'v-hooks';

const inputText = ref('');

const { text, isSupported, copy } = useClipboard();

</script>
<template>
  <p>
    Current copied: <code>{{ text || 'none' }}</code>
  </p>
  <input v-model="inputText" type="text" />
  <button @click="copy(inputText)">Copy</button>
</template>
```

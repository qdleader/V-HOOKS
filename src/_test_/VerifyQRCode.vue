<script lang="tsx" setup>
import { onMounted, ref } from 'vue';
import { useQRCode } from '../lib/useQRCode/index';
import logo from './1.png';
const text = ref<string>('https://www.baidu.com/');

const state = useQRCode(text, {
  logo: logo,
  colorDark: '#000000',
});
onMounted(() => {
  setTimeout(() => {
    text.value = 'https://www.aaa.cn/';
  }, 2000);
});
</script>
<template>
  <div>
    二维码：
    <img :src="state" alt="" />
  </div>
</template>

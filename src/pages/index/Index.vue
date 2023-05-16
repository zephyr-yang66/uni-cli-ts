<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">{{ hello.num }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface IHello {
  say: string;
  num: number;
}
import { ref, reactive } from 'vue';
const title = ref<string>('Hello');
const hello = reactive<IHello>({
  say: '22',
  num: 11,
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

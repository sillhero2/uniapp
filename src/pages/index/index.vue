<template>
  <div class="indexWarp">
    <!-- 顶部轮播图 -->
    <swiper
      class="banners"
      indicator-dots
      autoplay
      circular
      indicator-color="#fff"
      indicator-active-color="#00CC99"
    >
      <swiper-item v-for="item in banner" :key="item.src">
        <image :src="item.src"></image>
      </swiper-item>
    </swiper>

    <!-- 分类结构 -->
    <view class="categoryList flex">
      <view
        class="categoryItem flex_c"
        v-for="category in categoryList"
        :key="category.name"
      >
        <image :src="category.src" />
        <text>{{ category.name }}</text>
      </view>
    </view>
  </div>
</template>

<script setup lang="ts">
import { hotCateList, bannerCateList } from "@/common/mock/home";
import { ref } from "vue";

const banner = ref(bannerCateList); // 轮播图
const categoryList = ref(hotCateList); // 分类数据
</script>
<style lang="less" scoped>
.indexWarp {
  .banners {
    width: 100%;
    height: 300rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .categoryList {
    .categoryItem {
      width: 20%;
      margin: 20px 0;
      align-items: center;
      image {
        width: 72rpx;
        height: 72rpx;
      }
      text {
        font-size: 26rpx;
      }
    }
  }
}
</style>

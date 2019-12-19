<template>
  <div class="scroll">
    <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper" v-if="swiperPics.length!=0">
      <swiper-slide v-for="(item, index) in swiperPics" :key="index">
        <img :src="item.img" alt />
      </swiper-slide>
      <!-- 常见的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'slider',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperOption: {
      type: Object,
      default: function() {
        return {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // 循环
          loop: true,
          // 设定初始化时slide的索引
          initialSlide: 0,
          // 小手掌抓取滑动
          grabCursor: true,
          // 滑动速度
          speed: 800,
          // 滑动方向
          direction: 'horizontal',
          // 分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
          }
        }
      }
    },
    swiperPics: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

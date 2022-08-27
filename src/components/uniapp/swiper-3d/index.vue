<template>
  <view>
    <view class="swiperPanel" >
      <view class="swiperItem" v-for="(item, index) in swiperList" :key="index" :style="{transform: itemStyle[index].transform, zIndex: itemStyle[index].zIndex, opacity: itemStyle[index].opacity}">
        <view class="children">
          <image class="pic" :src="`https://xcfs-public.xystatic.com/10032/mall-xcx/avatar/${index+1}.png`"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      swiperList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        autoSwitch:'',
        slideNote: {
          x: 0,
          y: 0
        },
        screenWidth: 0,
        itemStyle: []
      };
    },
    created() {
      this.play();
      var macInfo = uni.getSystemInfoSync();
      this.screenWidth = macInfo.screenWidth;
      // 计算swiper样式
      this.swiperList.forEach((item, index) => {
        this.itemStyle.push(this.getStyle(index))
      })
    },
    methods: {
      getStyle(e) {
        //实现3D叠加效果
        if (e === 0){
          //隐藏第一项
          return {
            transform: 'scale(.3) translate(-' + (120) + '%,0px)',
            zIndex: 9,
            opacity: 0
          }
        }else if (e === 1){
          return {
            transform: 'scale(1) translate(' + (0) + '%,0px)',
            zIndex: 99,
            opacity: 1
          }
        }else if (e > 1 && e < 5){
          return {
            transform: 'scale(1) translate(' + ((e - 1) * 75) + '%,0px)',
            zIndex: 99 - e,
            opacity: 1
          }
        }else {
          return {
            //隐藏多余项
            transform: 'scale(.5) translate(' + (4 * 120) + '%,0px)',
            zIndex: 9,
            opacity: 0
          }
        }
      },

      slider(e) {
        var newList = JSON.parse(JSON.stringify(this.itemStyle))

        //执行向左滚动
        let last = [newList.pop()]
        newList = last.concat(newList)

        this.itemStyle = newList
      },
      play(){  // 自动切换
        this.autoSwitch = setInterval(()=>{
          this.slider();
        },2000)
      },
    }
  }
</script>

<style lang="scss">
  .swiperPanel {
    height: 30px;
    width: 100%;
    position: relative;

    .swiperItem {
      height: 30px;
      width: 30px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all .5s;

      .children {
        height: 30px;
        width: 30px;
        .pic {
          height: 25px;
          width: 25px;
          border-radius: 100%;
          border: 2px solid #fff;
        }
      }
    }
  }
</style>

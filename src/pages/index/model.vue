<template>
  <div class="container">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="content">模型</block>
    </cu-custom>
    <div class="model-box">
      <p class="text-xl name-cn">{{ nameCn }}</p>
      <p class="text-xl name-en">{{ nameEn }}</p>

      <div class="uni-margin-wrap">
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
                :duration="duration">
          <swiper-item v-for="(obj, index) in detailUrl" :key="index">
            <view class="swiper-item">
              <img :src="obj">
            </view>
          </swiper-item>
        </swiper>
      </div>
      <div class="model-content">
        <p v-if="data.company">公司:<span>{{ data.company }}</span></p>
        <p v-if="data.desc">desc:<span>{{ data.desc }}</span></p>
        <p v-if="data.discontinuedDate">discontinuedDate:<span>{{ data.discontinuedDate }}</span></p>
        <p v-if="data.faction">种族:<span>{{ data.faction }}</span></p>
        <p v-if="data.game">游戏:<span>{{ data.game }}</span></p>
        <p v-if="data.price">价格:<span>{{ data.price }}</span></p>
        <p v-if="data.releasedDate">releasedDate:<span>{{ data.releasedDate }}</span></p>
        <p v-if="data.scale">高度:<span>{{ data.scale }}</span></p>
        <p v-if="data.setting">分类:<span>{{ data.setting }}</span></p>
        <p v-if="data.specification">specification:<span>{{ data.specification }}</span></p>
        <p v-if="data.status">状态:<span>{{ data.status }}</span></p>
        <p v-if="data.tags">tags:<span>{{ data.tags }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import {getModelById} from '../../api'

export default {
  name: "model.vue",
  data() {
    return {
      id: '',
      nameEn: '',
      nameCn: '',
      data: {},
      indicatorDots: '',
      autoplay: true,
      interval: 10000,
      duration: 500,
    }
  },
  computed: {
    detailUrl() {
      return this.data.detailUrl || []
    }
  },
  onLoad(options) {
    this.id = options.id
    this.nameEn = options.nameEn
    this.nameCn = options.nameCn
    this.init()
  },
  methods: {
    async init() {
      this.data = await getModelById({id: this.id})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  min-height: 100%;
  width: 100%;
  padding-bottom: 20px;

  .name-en {
    font-style: italic;
    padding: 10rpx 20rpx;
  }

  .name-cn {
    padding: 20rpx 20rpx 0;
    font-weight: bold;
  }
}

.uni-margin-wrap {
  width: 100%;

}

.swiper {
  height: 800rpx;
}

.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;

  img {
    width: 100%;
    height: 800rpx;
  }
}
.model-content{
  p {
    margin: 20rpx;

    span {
      margin-left: 20rpx;
      color: #f37b1d;
      font-weight: bold;
    }
  }
}

</style>
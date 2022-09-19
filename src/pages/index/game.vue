<template>
  <div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="content">模型</block>
    </cu-custom>
    <div class="game-box">
      <div class="title solids-bottom">
        <p class="text-xl">游戏名：<span class="text-orange">{{ name }}</span></p>
      </div>
      <div class="model-box">
        <div class="model-content" v-for="(item,index) of records" :key="item.id" @click="goModel(item)">
          <img :src="item.modelUrl"/>
          <p class="name-cn text-sm text-cut">{{ item.nameCn }}</p>
          <p class="name-en text-xs text-cut">{{ item.nameEn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getModelByGame} from '../../api'

export default {
  name: "game.vue",
  data() {
    return {
      id: '',
      name: '',
      currentPage: 1,
      pageSize: 10,
      total: null,
      records: []
    }
  },
  onLoad(options) {
    this.id = options.id
    this.name = options.name
    this.init()
  },
  methods: {
    async init() {
      const {records, total} = await getModelByGame({
        id: this.id,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      })
      this.records = records
    },
    goModel(obj) {
      uni.navigateTo({
        url: '/pages/index/model?id=' + `${obj.id}` + '&nameCn=' + `${obj.nameCn}` + '&nameEn=' + `${obj.nameEn}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.game-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20rpx 20rpx;
  .title{
    width:100%;
    height:60rpx;
    span{
      font-style: italic;
    }
  }
  .solids-bottom::after {
    border-bottom: 2px solid #333333;
  }
}

.model-box {
  margin-top:20rpx;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.model-content {
  width:220rpx;
  height:360rpx;
  border-radius: 6px;
  border: 1px solid #D3D3D3;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  img {
    width: 220rpx;
    height: 260rpx;
    border-radius: 6px 6px 0 0;
  }
  .name-cn{
    padding:0 5rpx;
    margin-top:20rpx;
    font-weight: bold;
  }
  .name-en{
    padding:0 5rpx;
    margin-top:10rpx;
    font-style: italic;
  }
}



</style>
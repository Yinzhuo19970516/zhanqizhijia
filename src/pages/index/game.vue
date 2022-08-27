<template>
  <view>
  <cu-custom bgColor="bg-gradual-blue" :isBack="true">
    <block slot="content">游戏公司</block>
  </cu-custom>
  <text>{{name}}</text>
  <view v-for="(item,index) of records" :key="item.id">
    <view class="model-box">
      <image :src="item.modelUrl"></image>
    </view>
  </view>
  </view>
</template>

<script>
import {getModelByGame} from '../../api'
export default {
  name: "game.vue",
  data(){
    return {
      id:'',
      name:'',
      currentPage:1,
      pageSize:10,
      total:null,
      records:[]
    }
  },
  onLoad(options) {
    this.id = options.id
    this.name = options.name
    this.init()
  },
  methods:{
    async init(){
      const { records,total } = await getModelByGame({id:this.id,currentPage:this.currentPage,pageSize:this.pageSize})
      this.records = records
    }
  }
}
</script>

<style scoped>
.model-box{
  width:30%;
}
image{
  width:211rpx;
}
</style>
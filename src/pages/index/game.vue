<template>
  <div>
  <cu-custom bgColor="bg-gradual-blue" :isBack="true">
    <block slot="content">游戏公司</block>
  </cu-custom>
  <p class="text-xl">{{name}}</p>
  <div class="model-box" >
    <div class="model-content" v-for="(item,index) of records" :key="item.id" @click="goModel(item)">
      <img :src="item.modelUrl"/>
      <p class="name-cn text-sm text-cut">{{item.nameCn}}</p>
      <p class="name-en text-xs text-cut">{{item.nameEn}}</p>
    </div>
  </div>
  </div>
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
    },
    goModel(obj){
      uni.navigateTo({
        url:'/pages/index/model?id='+`${obj.id}`+'&nameCn='+`${obj.nameCn}`+'&nameEn='+`${obj.nameEn}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.model-box{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
.model-content{
  display: flex;
  flex-direction: column;
  width:30%;
}
img{
  width:211rpx;
  height:262rpx;
}

</style>
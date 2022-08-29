<template>
  <div class="container">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="content">模型</block>
    </cu-custom>
    <div class="main">

      <div class="img-box">
        <img :src="data.detailUrl&&data.detailUrl[0]">
      </div>
      <p>{{nameEn}}</p>
      <p>{{nameCn}}</p>
      <p v-if="data.company">company:<span>{{data.company}}</span></p>
      <p v-if="data.desc">desc:<span>{{data.desc}}</span></p>
      <p v-if="data.discontinuedDate">discontinuedDate:<span>{{data.discontinuedDate}}</span></p>
      <p v-if="data.faction">faction:<span>{{data.faction}}</span></p>
      <p v-if="data.game">game:<span>{{data.game}}</span></p>
      <p v-if="data.price">price:<span>{{data.price}}</span></p>
      <p v-if="data.releasedDate">releasedDate:<span>{{data.releasedDate}}</span></p>
      <p v-if="data.scale">scale:<span>{{data.scale}}</span></p>
      <p v-if="data.setting">setting:<span>{{data.setting}}</span></p>
      <p v-if="data.specification">specification:<span>{{data.specification}}</span></p>
      <p v-if="data.status">status:<span>{{data.status}}</span></p>
      <p v-if="data.tags">tags:<span>{{data.tags}}</span></p>
    </div>
  </div>
</template>

<script>
import { getModelById } from '../../api'
export default {
  name: "model.vue",
  data(){
    return{
      id:'',
      nameEn:'',
      nameCn:'',
      data:{}
    }
  },
  onLoad(options) {
    this.id = options.id
    this.nameEn = options.nameEn
    this.nameCn = options.nameCn
    this.init()
  },
  methods:{
    async init(){
      const data = await getModelById({id:this.id})
      this.data = data
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background: #fff;
  min-height: 100%;
  width: 100%;
  padding-bottom: 20px;
}
.img-box{
  margin: auto;
  display: flex;
  justify-content: center;
  img{
    width: 100%;
    height: 300px;
  }
}
</style>
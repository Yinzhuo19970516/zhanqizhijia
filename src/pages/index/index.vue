<template>
	<div>
    <cu-custom bgColor="bg-gradual-blue" :isBack="false">
      <block slot="content">战棋之家</block>
    </cu-custom>
    <div class="company-box" v-for="(item,index) of list" :key="item.company.id">
      <div class="title solids-bottom">
        <p class="text-xl">公司：<span class="text-orange">{{item.company.name}}</span></p>
      </div>
      <div class="game-box" v-for="(obj,key) of item.gameList" :key="obj.id" @click="goGameDetail(obj)">
        <img :src="obj.backgroundUrl" />
        <p>{{obj.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCompanyGame} from '../../api'
	export default {
		data() {
			return {
				title: 'Hello',
        list: []
			}
		},
	  onLoad() {
      this.init()
		},
		methods: {
      async init(){
        const list = await getCompanyGame()
        this.list = list
      },
      goGameDetail(obj){
        console.log(obj)
        uni.navigateTo({
          url:'/pages/index/game?id='+`${obj.id}`+'&name='+`${obj.name}`
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
  .company-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20rpx 40rpx;
    .title{
      width:100%;
      height:60rpx;
    }
    .solids-bottom::after {
      border-bottom: 4px solid #333333;
    }
  }
  .game-box{
    margin-top:20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      
    }
  }


</style>

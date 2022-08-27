<template>
	<view>
    <cu-custom bgColor="bg-gradual-blue" :isBack="false">
      <block slot="content">模型</block>
    </cu-custom>
    <view class="company-box" v-for="(item,index) of list" :key="item.company.id">
      <text class="text-xl">{{item.company.name}}</text>
      <view class="game-box" v-for="(obj,key) of item.gameList" :key="obj.id" @click="goGameDetail(obj)">
        <image :src="obj.backgroundUrl" />
        <text>{{obj.name}}</text>
      </view>
    </view>
  </view>
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

<style scoped>
  .company-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .game-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
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

<template>
  <div class="shop">
    <swipe class="my-swipe" :defaultIndex="0" :auto="3000">
      <swipe-item class="swipe-item" v-for="(banner, idx) in bannerList" :key="idx" :style="{backgroundImage: 'url('+banner+')'}"></swipe-item>
    </swipe>
    <div class="shop-name">
      <img :src="shopInfo.pic" alt="">
      <div class="right">
        <h2>{{shopInfo.name}}</h2>
        <p>营业时间</p>
        <p>{{shopInfo.time}}</p>
      </div>
    </div>
    <div class="shop-order">
      <router-link :to="{name: 'order', params: {id: shopInfo.id}}">
        <img src="../assets/order1.png">
      </router-link> 
      <router-link :to="{name: 'order', params: {id: shopInfo.id}}">
        <img src="../assets/order2.png">
      </router-link> 
      <router-link :to="{name: 'order', params: {id: shopInfo.id}}">
        <img src="../assets/order3.png">
      </router-link>   
    </div>
    <div class="shop-contact">
      <p><img src="../assets/address.png">地址: <span>{{shopInfo.address}}</span></p>
      <p><img src="../assets/phone.png">联系方式: <span>{{shopInfo.tel}}</span></p>
    </div>
    <div class="shop-intro">
      <h3><span></span>店家介绍</h3>
      <p>{{shopInfo.intro}}<router-link :to="{name: 'info', params: {id: shopInfo.id}}"> 详情>></router-link></p>
       
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'

export default {
  name: 'shop',
  data () {
    return {
      bannerList: [
        'http://via.placeholder.com/340x200',
        'http://via.placeholder.com/340x200',
      	'http://via.placeholder.com/340x200'
      ],
      shopInfo: {
        id: this.$route.params.id,
        name: '味多美',
        pic: 'http://via.placeholder.com/230x150',
        address: '厦门市思明区观音山',
        tel: '15060382154',
        intro: '味多美位于厦门市思明区观音山',
        time: '08:00 ~ 12:00 16:00 ~ 24:00'
      }
    }
  },
  components: {
  	Swipe,
  	SwipeItem
  },
  activated() {
    document.title = '首页'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .swipe-item {
  	background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .shop-name {
    position: relative;
    padding: .4rem .4rem .46rem 3.8rem;
    border-bottom: 1px solid #ddd;
  }
  .shop-name img {
    position: absolute;
    top: .4rem;
    left: .4rem;
    width: 3rem;
    height: 2rem;
    border-radius: 5px;
  }
  .shop-name h2 {
    font-size: .5rem;
    margin-bottom: .2rem;
  }
  .shop-name p {
    font-size: .4rem;
    color: #666;
  }
  .shop-order {
    padding: .4rem .46rem;
    border-bottom: 1px solid #ddd;
  }
  .shop-order img {
    width: 2.74rem;
    height: 2.16rem;
  }
  .shop-order a {
    margin-right: .3rem;
  }
  .shop-order a:last-child {
    margin-right: 0;
  }
  .shop-contact p {
    padding: .2rem .4rem;
    border-bottom: 1px solid #ddd;
  }
  .shop-contact img {
    width: .42rem;
    height: .42rem;
    vertical-align: -1px;
    margin-right: .3rem;
  }
  .shop-contact span {
    color: #666;
  }
  .shop-intro {
    padding: .5rem .4rem;
  }
  .shop-intro h3 {
    font-size: .5rem;
    font-weight: normal;
  }
  .shop-intro h3 span {
    display: inline-block;
    height: .5rem;
    width: 3px;
    vertical-align: -2px;
    background: #3ca4f9;
    margin-right: 5px;
  }
  .shop-intro p {
    color: #666;
    padding: .3rem 8px;
  }
  .shop-intro p a {
    color: #3481cf;
  }
</style>

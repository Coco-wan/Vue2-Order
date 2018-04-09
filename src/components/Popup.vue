<template>
  <div class="popup">
    <div @click="getPopup" class="mask"></div>
    <div class="layer">
      
      <div class="swipe-wrapper">
        <swipe class="my-swipe" :defaultIndex="popupId-1" :auto="0">
        <swipe-item class="swipe-item" v-for="(dish, idx) in dishList" :key="idx" :style="{backgroundImage: 'url('+dish.img+')'}">
          <h3>{{dish.name}}</h3>
          <div class="info">
            <div class="price">
              <p>¥{{dish.price}}</p>
              <p><span>会员¥{{dish.vipPrice}}</span></p>
            </div>
            <steper :selectData="dish" :dishNum="dish.num"></steper>
            <router-link :to="{name: 'detail', params: {id: dish.id}}"><div class="btn b2">详情</div></router-link>
          </div>
        </swipe-item>
        </swipe>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'
import Steper from '../components/Steper'

export default {
  name: 'popup',
  props: ['popupId'],
  data () {
    return {
      bannerList: [
        'http://via.placeholder.com/340x200',
        'http://via.placeholder.com/340x200',
        'http://via.placeholder.com/340x200'
      ]
    }
  },
  methods: {
    getPopup(){
      this.$root.$emit('change-popup',0)
    }
  },
  computed: {
    dishList(){
      return this.$store.state.orderList
    }
  },
  components: {
    Swipe,
    SwipeItem,
    Steper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
}
.layer {
  position: fixed;
  top: 14%;
  left: 0;
  width: 100%;
  background-color: #fff;
}
.layer h3 {
  position: absolute;
  top: -1.05rem;
  width: 100%;
  text-align: center;
  left: 0;
  color: #fff;
  font-size: .48rem;
}
.swipe-wrapper {
  padding: 1.5rem 0;
  background-color: rgba(0,0,0,.9);
}
.my-swipe {
  height: 6rem;
  color: #fff;
  text-align: center;
  overflow: visible!important;
}
.swipe-item {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.info {
  background-color: #fff;
  height: 1.8rem;
  position: absolute;
  width: 100%;
  left: 0;
  top: 7.5rem;
}
.price {
  position: absolute;
  color: #ff0000;
  top: .2rem;
  left: .4rem;
}
.price p {
  font-size: .5rem;
}
.price span {
  color: #bbb;
  font-size: .32rem;
}
.btn {
  display: inline-block;
  height: .8rem;
  line-height: .75rem;
  padding: 0 .6rem;
  border: 1px solid #3788ff;
  border-radius: 20px;
  color: #3788ff;
  background-color: #fff;
  position: absolute;
  right: .4rem;
  top: .5rem;
}
.btn.b2 {
  background-color: #3788ff;
  color: #fff;
}
</style>
<style lang="css">
.my-swipe .mint-swipe-items-wrap {
  overflow: visible!important;
}
.my-swipe .step {
  position: absolute;
  left: 4rem;
  top: .55rem;
  width: 2rem;
  height: .666rem;
  background: #fff;
}
.my-swipe .step span {
  color: #333;
}
</style>

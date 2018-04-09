<template>
  <div class="detail">
    <swipe class="my-swipe" :defaultIndex="0" :auto="3000">
      <swipe-item class="swipe-item" v-for="(banner, idx) in bannerList" :key="idx" :style="{backgroundImage: 'url('+banner+')'}"></swipe-item>
    </swipe>
    <div class="order">
      <div class="name">{{detailData.name}}</div>
      <div class="price">￥{{detailData.price}}</div>
      <steper :selectData="detailData" :dishNum="detailData.num"></steper>
    </div>
    <div class="info">
      <div class="con">
        <div class="left">推荐：</div>
        <div class="right">
          <div class="star" :class="'s'+detailData.star"></div>
        </div>
      </div>
      <div class="con">
        <div class="left">详情：</div>
        <div class="right">{{detailData.intro}}</div>
      </div>
    </div>
    <cart></cart>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'
import Cart from '../components/Cart'
import Steper from '../components/Steper'

export default {
  name: 'detail',
  data () {
    return {
      cid: this.$route.params.id
    }
  },
  beforeMount() {
    document.title = this.detailData.name
  },
  computed: {
    detailData(){
      return this.$store.getters.detailData(this.cid)
    },
    bannerList(){
      var list = []
      list.push(this.detailData.img)
      return list
    }
  },
  components: {
    Swipe,
    SwipeItem,
    Cart,
    Steper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.detail {
  position: absolute;
  z-index: 5;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
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
.order {
  padding: .4rem;
  overflow: hidden;
  position: relative;
}
.order .name {
  font-size: .5rem;
  width: 40%;
  float: left;
}
.order .price {
  font-size: .5rem;
  color: #ff0000;
  width: 20%;
  float: left;
}
.info {
  padding: .4rem;
  font-size: .42rem;
}
.info .con {
  overflow: hidden;
  margin-bottom: .2rem;
}
.info .con .left {
  float: left;
  width: 18%;
}
.info .con .right {
  float: left;
  width: 82%;
}
.star {
  width: 100px;
  height: 20px;
  background: url("../assets/star2.png") repeat-x;
  background-size: 20px;
  overflow: hidden;
  position: relative;
}
.star:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  background: url("../assets/star.png") repeat-x;
  background-size: 20px;
}
.star.s0:after {
  width: 0;
}
.star.s1:after {
  width: 20px;
}
.star.s2:after {
  width: 40px;
}
.star.s3:after {
  width: 60px;
}
.star.s4:after {
  width: 80px;
}
.star.s5:after {
  width: 100px;
}


</style>

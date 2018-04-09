<template>
  <div class="cart">
    <div class="scart">
      <div class="icon" @click="getOrderList('1')"></div>
      <div class="total">
        <div class="not" v-if="!totalNum">未选购商品</div>
        <div class="has" v-if="totalNum">
          <p>订单数量：{{totalNum}}</p>
          <p>总金额：<span>¥{{totalFee}}</span></p>
        </div>
      </div>
      <div class="btn" @click="goTicket">下单</div>
    </div>
    <div class="mask" @click="getOrderList('0')" :class="{on: isActive==1}"></div>
    <div class="orderlist" :class="{on: isActive==1}">
      <div class="title">购物车<span class="del" @click="clearList"></span></div>
      <ul>
        <li v-for="(cart, idx) in cartData" :key="idx">
          <div class="name">{{cart.name}}</div>
          <div class="price">¥{{cart.price}}</div>
          <steper :selectData="cart" :dishNum="cart.num"></steper>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Steper from '../components/Steper'

export default {
  name: 'cart',
  data() {
    return {
      isActive: 0
    }
  },  
  computed: {
    cartData(){
      return this.$store.getters.cartList
    },
    totalNum(){
      return this.$store.getters.totalNum
    },
    totalFee(){
      return this.$store.getters.totalFee
    }
  },
  methods: {
    getOrderList(status){
      if(this.cartData.length == 0){
        this.isActive = 0
        return
      }
      this.isActive = status
    },
    clearList(){
      this.$store.commit('clear')
    },
    goTicket(){
      if(this.totalNum == 0){
        alert('请先点餐');
        return
      }
      this.$router.push({ name: 'ticket', params: { userId: 123 }})
    }
  },
  components: {
    Steper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.mask {
  opacity: 0;
  transition: all .4s;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.7);
  z-index: -1;
  top: 0;
  left: 0;
}
.mask.on {
  opacity: 1;
  z-index: 7;
}
.orderlist {
  position: fixed;
  z-index: 8;
  width: 9.6rem;
  left: .2rem;
  bottom: 1.8rem;
  background: #fff;
  border-radius: 8px 8px 0 0;
  transform: translateY(100%);
  transition: all .4s;
}
.orderlist.on{
  transform: translateY(0);
}
.orderlist .title {
  position: relative;
  height: 1rem;
  background: #cecfd0;
  color: #666;
  padding: 0 .4rem;
  line-height: 1rem;
  border-radius: 8px 8px 0 0;
  font-size: .4rem;
}
.orderlist .title .del {
  position: absolute;
  width: .6rem;
  height: .6rem;
  background: url(../assets/del.png) no-repeat 0 0;
  background-size: contain;
  top: .2rem;
  right: .4rem;
}
.orderlist ul {
  min-height: 4rem;
  max-height: 7.5rem;
  overflow: scroll;
  padding-bottom: .8rem;
}
.orderlist li {
  position: relative;
  padding: .4rem;
  border-bottom: 1px solid #eee;
}
.orderlist li .name {
  width: 3.3rem;
  font-size: .4rem;
  display: inline-block;
}
.orderlist li .price {
  width: 3rem;
  font-size: .4rem;
  display: inline-block;
  color: #ff0000;
}
.scart {
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.8rem;
  background: #2c81f0;
  color: #fff;
}
.scart .icon {
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  background: url(../assets/cart.png) no-repeat 0 0;
  background-size: contain;
  top: -.8rem;
  left: .8rem;
}
.scart .total {
  position: absolute;
  left: 2.8rem;
  top: 0;
  width: 3.566rem;
  height: 1.8rem;
  border-right: 1px solid #83aee8;
  padding: .266rem 0;
}
.scart .total .not {
  line-height: 1.268rem;
  text-align: center;
}
.scart .total .has {
  font-size: .36rem;
}
.scart .total .has p:first-child {
  margin-bottom: .1rem;
}
.scart .total .has span {
  color: #ff0000;
  font-size: .5rem;
}
.scart a {
  color: #fff;
}
.scart .btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 3.6rem;
  text-align: center;
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: .5rem;
  letter-spacing: 5px;
}
</style>

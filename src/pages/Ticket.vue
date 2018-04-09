<template>
  <div class="ticket">
	<div class="header">
		<img src="../assets/logo.png">
		<div class="hid">
			<p>订单号：5121315555</p>
			<p>2018-03-29 18:30:00</p>
			<p><span>来自店内订单</span></p>
		</div>
	</div>
	<div class="card">
		<div class="food">
			<div class="title">
				<div class="f1">商品</div>
				<div class="f2">数量</div>
				<div class="f3">金额</div>
			</div>
			<ul>
				<li v-for="(cart, idx) in cartData" :key="idx">
					<div class="f1">{{cart.name}}</div>
					<div class="f2">{{cart.num}}</div>
					<div class="f3">￥{{cart.price}}</div>
				</li>
			</ul>
		</div>
		<ul class="tinfo">
			<li>
				<div class="left">总数量</div>
				<div class="right">{{totalNum}}</div>
			</li>
			<li>
				<div class="left">桌号</div>
				<div class="right">10</div>
			</li>
			<li>
				<div class="left">卡券折扣</div>
				<div class="right">&gt;</div>
			</li>
			<li>
				<div class="left">支付方式</div>
				<div class="right">等待支付</div>
			</li>
			<li>
				<div class="left">订单金额</div>
				<div class="right">￥{{totalFee}}</div>
			</li>
			<li>
				<div class="left">实付金额</div>
				<div class="right red">￥{{totalFee}}</div>
			</li>
			<li>
				<div class="left">备注</div>
				<div class="right"></div>
			</li>
			<li>
				<div class="left">地址</div>
				<div class="right"></div>
			</li>
		</ul>
	</div>
	<div class="bottom">
		<div class="btn">付款</div>
		<div class="btn" @click="cancel">取消</div>
		<div class="btn b2">打印</div>
		<div class="btn b2">确定</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  beforeMount() {
    document.title = '订单详情'
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
  	cancel(){
  	  this.$store.commit('clear')
  	  this.$router.go(-1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.ticket {
	height: 100%;
}
.header {
	padding: .8rem .8rem .8rem 2.8rem;
	position: relative;
}
.header img {
	position: absolute;
	width: 1.36rem;
	height: 1.16rem;
	top: 1.4rem;
	left: .8rem;
}
.hid {
	font-size: .48rem;
}
.hid p {
	margin-bottom: .2rem;
}
.hid p span {
	color: #ff0000;
}
.card {
	width: 9.6rem;
	margin: 0 .2rem;
	border-radius: 8px 8px 0 0;
	box-shadow: 2px 2px 5px rgba(0,0,0,.08), -2px -2px 5px rgba(0,0,0,.08);
	max-height: 76%;
	overflow: scroll;
	padding-bottom: 1.466rem;
}
.food {
	padding: .4rem;
	border-bottom: 1px solid #eee;
}
.food .title,.food li {
	overflow: hidden;
}
.food .title {
	color: #3788ff;
	font-size: .48rem;
}
.food li {
	font-size: .42rem;
}
.food .f1 {
	float: left;
	width: 40%;
	height: 1.2rem;
	line-height: 1.2rem;
	text-align: left;
}
.food .f2 {
	float: left;
	width: 20%;
	height: 1.2rem;
	line-height: 1.2rem;
	text-align: center;
}
.food .f3 {
	float: left;
	width: 40%;
	height: 1.2rem;
	line-height: 1.2rem;
	text-align: right;
}
.tinfo {
	padding: .5rem .4rem;
	font-size: .42rem;
}
.tinfo li {
	overflow: hidden;
	padding: .2rem 0;
}
.tinfo .left {
	width: 30%;
	float: left;
}
.tinfo .right {
	width: 70%;
	float: left;
	text-align: right;
}
.tinfo .right.red {
	color: #ff0000;
	font-size: .48rem;
}
.bottom {
	position: absolute;
	width: 9.6rem;
	height: 1.466rem;
	line-height: 1.466rem;
	text-align: center;
	background-color: #fff;
	bottom: 0;
	left: .2rem;
	border-top: 1px solid #eee;
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
}
.btn.b2 {
	background-color: #3788ff;
	color: #fff;
}
</style>

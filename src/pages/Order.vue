<template>
  <div class="order">
	<div class="list">
		<div class="left">
			<ul class="category">
				<li v-for="(list,idx) in category" :key="idx" :class="{on:idx==activeId}" @click="getDish(list.id,idx)">{{list.name}}</li>
			</ul>
		</div>
		<div class="right">
			<ul class="dish">
				<li v-for="(dish,idx) in dishList" :key="dish.id" v-show="dish.cid == categoryid">
					<img @click="getPopup(idx)" :src="dish.img">
					<div class="intro">
						<h3>{{dish.name}}<span v-if="dish.isHot" class="hot"></span></h3>
						<p class="price"><span>¥{{dish.price}}</span>／份</p>
						<p class="vip">会员¥{{dish.vipPrice}}</p>
					</div>
					<steper :selectData="dish" :dishNum="dish.num"></steper>
				</li>
			</ul>
		</div>
	</div>
	<cart></cart>
	<popup v-if="showPopup" :popupId="showPopup"></popup>
  </div>
</template>

<script>
import Cart from '../components/Cart'
import Steper from '../components/Steper'
import Popup from '../components/Popup'

export default {
  name: 'order',
  data () {
    return {
      showPopup: 0,
      activeId: 0,
      category: [
        {
          id: '1',
          name: '套餐'
        },
        {
          id: '2',
          name: '饮料'
        },
        {
          id: '3',
          name: '小炒'
        }
      ],
      categoryid: 0
    }
  },
  beforeMount() {
    document.title = '下单'

    this.categoryid = this.category[0]['id']

    this.$root.$on('change-popup', (val)=>{
      this.showPopup = val;
    })

    var list = [
      {
        cid: '1',
        id: '11',
        name: '黄焖鸡',
        price: '20.00',
        vipPrice: '18.00',
        img: 'http://via.placeholder.com/100x100',
        star: 4,
        intro: '好吃',
        isHot: 1
      },
      {
        cid: '1',
        id: '12',
        name: '莆田卤面',
        price: '24.00',
        vipPrice: '18.00',
        img: 'http://via.placeholder.com/100x100',
        star: 5,
        intro: '',
        isHot: 0
      },
      {
        cid: '2',
        id: '13',
        name: '可口可乐',
        price: '5.00',
        vipPrice: '5.00',
        img: 'http://via.placeholder.com/100x100',
        star: 4,
        intro: '好吃',
        isHot: 1
      },
      {
        cid: '2',
        id: '14',
        name: '果粒橙',
        price: '10.00',
        vipPrice: '8.00',
        img: 'http://via.placeholder.com/100x100',
        star: 3,
        intro: '好吃',
        isHot: 1
      },
      {
        cid: '3',
        id: '15',
        name: '炒青菜',
        price: '8.00',
        vipPrice: '6.00',
        img: 'http://via.placeholder.com/100x100',
        star: 2,
        intro: '好吃',
        isHot: 1
      },
      {
        cid: '3',
        id: '16',
        name: '糖醋排骨',
        price: '30.00',
        vipPrice: '28.00',
        star: 1,
        intro: '好吃',
        img: 'http://via.placeholder.com/100x100',
        isHot: 0
      }
    ]

    this.$store.commit('init',list)
  },
  computed: {
    dishList(){
      return this.$store.state.orderList
    }
  },
  methods: {
  	getDish(id,idx){
  	  this.categoryid = id
      this.activeId = idx
  	},
  	getPopup(id){
  	  this.showPopup = ++id
  	}
  },
  components: {
  	Cart,
  	Popup,
    Steper
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
@import '../style/order';

</style>

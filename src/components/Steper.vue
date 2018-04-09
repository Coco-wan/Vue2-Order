<template>
  <div class="steper">
	 <div class="step">
      <button class="minus" v-if="dishNum" @click="doMinus"></button>
      <span v-if="dishNum">{{dishNum}}</span>
      <button class="plus" @click="doPlus"></button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'steper',
  props: ['selectData','dishNum'],
  methods: {
  	doMinus(){
      if(this.dishNum > 0){
        this.$store.commit('dec',this.selectData)
      }
  	},
    doPlus(){
      this.$store.commit('inc',this.selectData)
    }
  },
  watch: {
    dishNum(val){
      return val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.step {
  position: absolute;
  right: .4rem;
  bottom: .4rem;
  width: 2rem;
  height: .666rem;
  background: #fff;
}
.step button {
  position: absolute;
  top: 0;
  width: .666rem;
  height: .666rem;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
}
.step .plus {
  right: 0;
  background-image: url(../assets/plus.png);
}
.step .minus {
  left: 0;
  background-image: url(../assets/minus.png);
}
.step span {
  position: absolute;
  left: .666rem;
  top: 0;
  height: .666rem;
  line-height: .666rem;
  text-align: center;
  width: .62rem;
}
</style>

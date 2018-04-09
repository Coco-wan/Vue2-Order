<template>
  <div class="info">
	<h3><span></span>店家介绍</h3>
	<p>{{info}}</p>
	<div class="icon">
		<img src="../assets/wifi.png">
		<img src="../assets/park.png">
		<img src="../assets/bus.png">
	</div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
  	return {
  		info: '味多美位于厦门市思明区观音山,味多美位于厦门市思明区观音山,味多美位于厦门市思明区观音山'
  	}
  },
  activated() {
    document.title = '商家信息'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .info {
    padding: .5rem .4rem;
    border-bottom: 1px solid #ddd;
  }
  .info h3 {
    font-size: .5rem;
    font-weight: normal;
  }
  .info h3 span {
    display: inline-block;
    height: .5rem;
    width: 3px;
    vertical-align: -2px;
    background: #3ca4f9;
    margin-right: 5px;
  }
  .info p {
    color: #666;
    padding: .3rem 8px;
  }
  .info p a {
    color: #3481cf;
  }
  .icon {
  	margin: .2rem 0;
  }
  .icon img {
  	width: 1.86rem;
  	height: auto;
  	margin-right: .2rem; 
  }
</style>

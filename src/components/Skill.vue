<template>
	<div id="skill">
		<div class="container">
      <div class="row clearfix">

      	<div class="u-col-12">
      		<div class="main-title">技能</div>
      		<hr>
      	</div>

      	<div class="u-col-6">
      		<div class="card">
      			<div class="icon">
      				<img src="../images/html.png" alt="HTML/CSS">
      			</div>
      			<div class="skill-title">HTML/CSS</div>
      			<div class="item">HTML5</div>
      			<div class="item">CSS3, Sass</div>
      			<div class="item">RWD, Bootstrap</div>
      		</div>
      	</div>
      	<div class="u-col-6">
      		<div class="card">
      			<div class="icon">
      				<img src="../images/js.png" alt="JavaScript">
      			</div>
      			<div class="skill-title">JavaScript</div>
      			<div class="item">JavaScript, ES6</div>
      			<div class="item">AJAX</div>
      			<div class="item">jQuery</div>
      		</div>
      	</div>
      	<div class="u-col-6">
      		<div class="card">
      			<div class="icon">
      				<img src="../images/vue.png" alt="Vue.js">
      			</div>
      			<div class="skill-title">Vue.js</div>
      			<div class="item">Vue.js</div>
      			<div class="item">Vuex</div>
      		</div>
      	</div>
      	<div class="u-col-6">
      		<div class="card">
      			<div class="icon">
      				<img src="../images/coding.png" alt="others">
      			</div>
      			<div class="skill-title">Others</div>
      			<div class="item">Git</div>
      			<div class="item">Webpack</div>
      		</div>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	$dark-black: #333;
	$dark-gray: #50514F;
	$light-gray: #f5f5f5;
	$light-yellow: #FAF3DD;
	$gray-blue: #247BA0;
	$font-size: 10px;

	* {
	  position: relative;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	  font-family: 'Open Sans', 'Barlow Condensed', sans-serif;
	}
	body {
	  font-size: $font-size;
	  font-weight: 400;
	  -webkit-font-smoothing: antialiased;
	  -moz-font-smoothing: antialiased;
	}
	img {
	  display: block;
	}
	ul {
	  margin: 0;
	  padding-left: 0;
	}
	li {
	  list-style-type: none;
	}
	p {
	  color: $dark-gray;
	  line-height: 30px;
	}
	a {
	  color: $dark-black;
	  text-decoration: none;
	}
	.container {
	  display: block;
	  max-width: 1170px;
	  margin: 0 auto;
	}
	.clearfix:after, .row:after {
	  content: "";
	  display: table;
	  clear: both;
	}
	.row {
	  margin: 0 -10px;
	}
	.u-col-6 {
		float: left;
	  padding: 0 30px;
	  width: 50%;
	}
	.u-col-12 {
		float: left;
	  padding: 0 30px;
	  width: 100%;
	}

	#skill {
	  width: 100%;
	  min-height: 700px;
	  // background: #FBFAF4;
	  position: relative;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  z-index: 0;
	}
	.card {
		position: relative;
		margin: 2.5rem;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    background-color: white;
  }
  .card:before {
  	content: "";
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100%;
    height: 100%;
    background-color: $light-gray;
    -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    z-index: -10;
  }
	.icon {
    position: absolute;
    top: -25%;
    left: -7%;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
    -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    img {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
	    width: 60%;
		}
  }
	.skill-title {
		margin: 0.6rem 0;
		color: $gray-blue;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
	}
	.item {
		letter-spacing: 1px;
		line-height: 2rem;
	}
	.main-title {
		display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 1.6rem;
	  text-transform: uppercase;
	  color: $dark-gray;
	}
	hr {
		margin-top: none;
		margin-bottom: 2rem;
		width: 10%;
	}
</style>
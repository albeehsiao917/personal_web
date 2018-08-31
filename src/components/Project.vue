<template>
	<div id="projects">
		<div class="container">
      <div class="row clearfix">

      	<div class="u-col-12">
      		<div class="main-title">專案</div>
      		<hr>
      	</div>
				<!-- Weird Store -->
      	<div class="u-col-6">
      		<div class="project">
      			<a class="card" 
      				href="https://albeehsiao917.github.io/weird_store/dist/#/" 
      				target="_blank">
		          <div class="imgbox">
		          	<img src="../images/project_weird_store.png" alt="Weird Store"/>
		          </div>
		          <div class="title">Weird Store</div>
	        	</a>
	          <a class="code" 
	          	href="https://albeehsiao917.github.io/weird_store/dist/#/" 
	          	target="_blank">
	          	前往
	          </a>
	          <div class="desc">
	          	<span><i class="fas fa-check icon"></i>Vue.js</span>
	          	<span><i class="fas fa-check icon"></i>AJAX</span>
	          	<span><i class="fas fa-check icon"></i>Bootstrap</span>
	          	<span><i class="fas fa-check icon"></i>Webpack</span>
	          </div>
      		</div>
      	</div>
      	<!-- AQI Opendata -->
      	<div class="u-col-6">
      		<div class="project">
      			<a class="card" 
      				href="https://albeehsiao917.github.io/aqi_opendata/" 
      				target="_blank">
		          <div class="imgbox">
		          	<img src="../images/project_aqi_opendata.png" alt="AQI Opendata"/>
		          </div>
		          <div class="title">AQI Opendata</div>
	        	</a>
	          <a class="code" 
	          	href="https://albeehsiao917.github.io/aqi_opendata/"
	          	target="_blank">
	          	前往
	          </a>
	          <div class="desc">
	          	<span><i class="fas fa-check icon"></i>Vue.js</span>
	          	<span><i class="fas fa-check icon"></i>AJAX</span>
	          	<span><i class="fas fa-check icon"></i>Bootstrap</span>
	          </div>
      		</div>
      	</div>
      	<!-- Personal Web -->
      	<div class="u-col-6">
      		<div class="project">
      			<a class="card">
      				<!-- href="#" target="_blank" -->
		          <div class="imgbox">
		          	<img src="../images/project_personal_web.png" alt="Personal Web"/>
		          </div>
		          <div class="title">Personal Web</div>
	        	</a>
	          <div class="code"> 
	          	<!-- href="#" target="_blank" -->
	          	It's Here
	          </div>
	          <div class="desc">
	          	<span><i class="fas fa-check icon"></i>Vue.js</span>
	          	<span><i class="fas fa-check icon"></i>Vuex</span>
	          	<span><i class="fas fa-check icon"></i>Webpack</span>
	          	<span><i class="fas fa-check icon"></i>i18n</span>
	          </div>
      		</div>
      	</div>
      	<!-- To Do List -->
      	<div class="u-col-6">
      		<div class="project">
      			<a class="card" 
      				href="https://albeehsiao917.github.io/vue_todolist/" 
      				target="_blank">
		          <div class="imgbox">
		          	<img src="../images/project_todolist.png" alt="To Do List"/>
		          </div>
		          <div class="title">To Do List</div>
	        	</a>
	          <a class="code" 
	          	href="https://albeehsiao917.github.io/vue_todolist/" 
	          	target="_blank">
	          	前往
	          </a>
	          <div class="desc">
	          	<span><i class="fas fa-check icon"></i>Vue.js</span>
	          	<span><i class="fas fa-check icon"></i>Bootstrap</span>
	          	<span><i class="fas fa-check icon"></i>localStorage</span>
	          </div>
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
	$maize-yellow: #FFE066;
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
	a {
	  color: $dark-black;
	  text-decoration: none;
	}
	#projects {
	  width: 100%;
	  min-height: 700px;
	  // background: #F7F7F7;
	  position: relative;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  z-index: 0;
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
	.card {
    display: inline-block;
    &:hover {
    	.imgbox {
        opacity: .6;
    	}
      .title {
      	bottom: 35%;
      }
      &:before {
        opacity: 0;
      }
    }
  }
  .imgbox {
		width: 100%;
    transition: all .3s;
    background-color: $gray-blue;
    box-shadow: 0 3px 10px rgba(black,.3);
    z-index: 0;
    img {
    	display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .3s;
      z-index: 20;
    }
  }
  .title {
  	position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all .3s;
    z-index: 30;
    &:before {
			content: '';
      position: absolute;
      top: 10px;
      left: 20px;
      width: 100%;
      height: 85%;
      background-color: $maize-yellow;
      z-index: -10;
    }
  }
  .code {
		display: block;
    width: 100px;
    margin: 3% auto;
    padding: 1.5% 0;
    font-size: .85rem;
    text-align: center;
    color: $gray-blue;
    border: 1px solid;
    border-radius: 20px;
    transition: all .3s;
    &:hover {
			color: white;
      background-color: $gray-blue;
    }
  }
  .desc {
  	margin-bottom: 10%;
    text-align: center;
    span {
			display: inline-block;
      margin-right: 3%;
      line-height: 1.5rem;
      .icon {
        margin-right: 0.4rem;
      }
    }
  }
</style>
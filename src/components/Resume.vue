<template>
	<div id="resume">
		<div class="container">
      <div class="row clearfix">
      	<div class="u-col-12">
      		<div class="main-title">履歷</div>
      		<hr>
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
	#resume {
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
</style>
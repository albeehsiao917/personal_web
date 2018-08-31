<template>
	<header>
		<div class="web-name">Hi, I'm Albee</div>
    <nav>
      <a class="link" v-scroll-to="'#about'">關於</a>
      <!-- {{$t("Landing.about", $store.state.language)}} -->
      <span>|</span>
      <a class="link" v-scroll-to="'#skill'">技能</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#projects'">專案</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#resume'">履歷</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
	$dark-black: #333;
	$dark-gray: #50514F;
	$light-gray: #f5f5f5;
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
	header {
	  position: fixed;
	  width: 100%;
	  height: 80px;
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	  padding: 0px 10px;
	  background: $light-gray;
	  z-index: 100;
	  border-top: 7px solid $dark-gray;
	}
	nav {
	  display: flex;
	  justify-content: flex-end;
	  width: 100%;
	  align-items: center;

	  .link {
	    margin: 0 1%;
	    letter-spacing: 2px;
	    font-size: 1rem;
	    color: $dark-black;
	    text-decoration: none;

	    &:hover {
	      color: $gray-blue;
	      cursor: pointer;
	      border-bottom: 2px solid $gray-blue;
	    }
	  }

	  span {
	    color: $dark-black;
	  }
	}
	.web-name{
		width: 30%;
		display: flex;
		justify-content: flex-start;
		text-decoration: none;
	  font-family: 'Knewave', cursive;
	  font-size: 36px;
	  padding: 0 1%;
	  // background: -webkit-linea,r-gradient(45deg, #247BA0, #70C1B3);
	  background: $dark-black;
	  -webkit-background-clip: text;
	  background-clip: text;
	  -webkit-text-fill-color: transparent;
	}
</style>
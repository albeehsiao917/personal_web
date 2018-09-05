<template>
  <div id="header">
    <div class="container clearfix">
        <div class="u-col-4" id="logo">
            <div class="web-name">Hi, I'm Albee</div>
        </div>
        <div class="u-col-8">
          <div id="nav" :class="{'open':isMenu}">
          	<ul>
          		<li>
          			<a v-scroll-to="'#about'">關於</a>
			      		<span class="boundary"></span>
          		</li>
          		<li>
          			<a v-scroll-to="'#skill'">技能</a>
			      		<span class="boundary"></span>
          		</li>
          		<li>
          			<a v-scroll-to="'#project'">專案</a>
			      		<span class="boundary"></span>
          		</li>
          		<li>
          			<a v-scroll-to="'#resume'">履歷</a>
                <span class="boundary"></span>
          		</li>
          	</ul>
          </div>
        </div>
        <div id="menu-trigger">
          <button class="menu-btn btn" @click.prevent="isMenu = !isMenu">
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </button>
        </div>
    </div>
  </div>

</template>

<script>
	export default {
    data() {
      return {
        isMenu: false,
      }
    },
  }
</script>

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
	a {
	  color: $dark-black;
	  text-decoration: none;
	}
	.u-col-4, .u-col-8 {
		float: left;
	  padding: 0;
	}
	.u-col-4 {
		width: 33.33333%;
	}
	.u-col-8 {
		width: 66.66667%;
	}
	#header {
    position: fixed;
	  width: 100%;
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	  padding: 0px 10px;
	  background: $light-gray;
	  z-index: 100;
	  border-top: 7px solid $dark-gray;
  }
  #logo {
    position: relative;
    float: left;
    text-transform: uppercase;
    line-height: 100px;
  }
	#nav {
    line-height: 100px;
    position: relative;
    float: right;
    
    li {
      float: left;
    }
    a {
	    margin: 0 1%;
	    letter-spacing: 2px;
	    font-size: 1rem;
	    color: $dark-black;
	    text-decoration: none;
	    &:hover {
	      color: $gray-blue;
	      cursor: pointer;
	      border-bottom: 2px solid $gray-blue;
	    }	  }
  }
  .boundary {
    &:after {
      content: "|";
      padding: 0 12px;
      color: $dark-black;
    }
  }
	.web-name{
		display: flex;
		justify-content: flex-start;
		text-decoration: none;
	  font-family: 'Knewave', cursive;
	  font-size: 36px;
	  padding: 0 1%;
	}
	#menu-trigger {
    display: none;
  }
  .menu-btn {
    background: #f5f5f5;
    border: 1px solid #7e7e7e;
  }
	@media (max-width: 1024px) { 
    .container {
      max-width: 760px; 
    }
    .web-name{
	    font-size: 28px;
		}
  }
  @media (max-width: 620px) { 
    .container {
      max-width: 400px; 
    }
    .u-col-4 {
			width: 80%;
		}
		.u-col-8 {
			width: 100%;
		}
	  #nav {
      display: none;
    }
    #menu-trigger {
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding: 5px 0;
    }
    #logo {
      padding: 5px 0;
      line-height: 38px;
    }
    .boundary {
      &:after {
        content: "";
        padding: 0;
      }
    }
    #nav.open {
      display: block;
      width: 100%;
      height: 20%;
      text-align: center;
      background-color: #f5f5f5;
      line-height: 25px;
		  ul {
        position: relative;
        float: none;
      }
      li {
        position: relative;
        display: flex;
        justify-content: flex-end;
        padding: 0 5px;
        float: none;
      }
    }
  }
</style>
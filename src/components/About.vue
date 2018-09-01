<template>
	<div id="about">
		<div class="container">
      <div class="row clearfix">
      	<!-- content -->
      	<div class="u-col-8 left">
      		<div class="content-title">蕭宇欣 Albee Hsiao</div>
      		<div class="info">
      			<div class="font-icon">
              <span><i class="fas fa-thumbs-up icon"></i></span>
              <div>前端工程師</div>
            </div>
            <div class="font-icon">
              <span><i class="fas fa-map-marker-alt icon"></i></span>
              <div>台灣，台北</div>
            </div>
            <div class="font-icon">
              <span><i class="fas fa-envelope icon"></i></span>
              <a :href="`mailto:julypurple0719@gmail.com`">
              	julypurple0719@gmail.com
              </a>
            </div>
      		</div>
      		<div class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta suscipit error laboriosam debitis atque ab temporibus nisi veritatis voluptate sunt, qui, quos libero cumque ad ducimus numquam molestias eos eaque possimus ullam hic inventore. Expedita voluptates quis tempore quia, aliquid quae aspernatur tenetur dolorum, dicta, nesciunt, ab consequatur quidem facere.	
          </div>
      	</div>
      	<!-- photo -->
      	<div class="u-col-4 right">
      		<div class="image"></div>
          <div class="icons">
            <a href="https://www.instagram.com/hsiao917/" target="_blank">
              <img src="../images/instagram.png" alt="instagram">
            </a>
            <a href="www.linkedin.com/in/albeehsiao-8ba453146" target="_blank">
              <img src="../images/linkedin.png" alt="linkedin">
            </a>
            <a href="https://github.com/albeehsiao917" target="_blank">
              <img src="../images/github.png" alt="github">
            </a>
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
	$maize_yellow: #FFE066;
	$mint-green: #70C1B3;
	$pastel-red: #F25F5C;
	$dark-green: #4A7C59;
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
	.u-col-4, .u-col-8 {
	  float: left;
	  padding: 0 30px;
	}
	.u-col-4 {
	  width: 33.33333%;
	}
	.u-col-8 {
	  width: 66.66667%;
	}

	#about {
	  width: 100%;
	  min-height: 600px;
	  background: white;
	  position: relative;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	}
	.info {
	  margin: 10px 0px;
	  .font-icon {
	    display: flex;
	    align-items: center;
	    margin-bottom: 7px;
	    span {
	      width: 20px;
	      display: flex;
	      justify-content: center;
	      margin-right: 6px;
	    }
	    p {
	      font-size: 1rem;
	    }
	    &:last-child {
	      margin-bottom: 0px;
	    }
	    .icon {
	      color: $dark-gray;
	      font-size: 1.1rem;
	    }
	  }
	}
	.description {
	  border-left: 4px solid $gray-blue;
	  padding-left: 20px;
	  line-height: 1.5;
	}
	.left {
	  display: flex;
	  justify-content: center;
	  align-items: flex-start;
	  flex-direction: column;
	  flex: 3;
	  .content-title {
	    color: $gray-blue;
	    font-size: 1.5rem;
	    font-weight: 500;
	  }
	}
	
  .right {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  flex: 1;
  	.image {
	  	display: flex;
	    justify-content: center;
	    width: 150px;
	    height: 150px;
	    background-image: url('../images/selfie.jpg');
	    background-size: cover;
	    background-position: center;
	    border-radius: 75px;
	  }
	  .icons {
	    margin-top: 15px;
	    user-select: none;
	    display: flex;
	    justify-content: center;
	    a, img {
	      width: 30px;
	      padding-bottom: 1px;
	      margin-right: 5px;
	      &:last-child {
	        margin-right: 0px;
	      }
	    }
	    a:hover {
	      border-bottom: 2px solid $gray-blue;
	    }
	  }
  }
  @media (max-width: 1024px) { 
    .container {
      max-width: 760px; 
    }
    .u-col-4 {
      width: 40%;
    }
    .u-col-8 {
      width: 60%;
    }
  }
  @media (max-width: 768px) { 
    .container {
      max-width: 400px; 
    }
    .u-col-4, .u-col-8 {
      width: 100%;
    }
    .left {
    	.content-title {
    		font-size: 1.3rem;
		    font-weight: 400;
		    margin-top: 7rem;
    	}
    }
    .info, .description {
    	font-size: 0.9rem;
		}
		.right {
	  	.image {
		    margin: 2rem 0;
		  }
		  .icons {
		    margin-top: 0px;
		  }
	  }
  }
</style>
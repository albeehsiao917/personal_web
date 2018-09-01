<template>
	<div>
		<navbar />
		<about id="about" ref="about" />
    <skill id="skill" ref="skill" />
    <project id="projects" ref="projects" />
    <resume id="resume" ref="resume" />
    <div id="copyright">
	    <footer>&copy; 2018 Albee Hsiao</footer>
		</div>
	</div>
</template>

<script>
	import navbar from './Navbar.vue';
	import about from './About.vue';
	import skill from './Skill.vue';
	import project from './Project.vue';
	import resume from './Resume.vue';

	export default {
	  components: {
	    navbar,
	    about,
	    skill,
	    project,
	    resume,
	  },
	  data () {
	    return {}
	  },
	}
</script>

<style lang="scss" scoped>
	* {
	  position: relative;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	  font-family: 'Open Sans', 'Barlow Condensed', sans-serif;
	}
	body {
	  font-size: 10px;
	  font-weight: 400;
	  -webkit-font-smoothing: antialiased;
	  -moz-font-smoothing: antialiased;
	}
	#copyright {
	  width: 100%;
	  min-height: 60px;
	  background: #f5f5f5;
	  position: relative;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  z-index: 0;
	}
	footer {
    text-align: center;
    color: #5e5e5e;
    letter-spacing: 1px;
	}
</style>

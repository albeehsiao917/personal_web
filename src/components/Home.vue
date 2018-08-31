<template>
	<div>
		<navbar />
		<about id="about" ref="about" />
    <skill id="skill" ref="skill" />
    <project id="projects" ref="projects" />
    <resume id="resume" ref="resume" />
    <footer />
	</div>
</template>

<script>
	import Navbar from './Navbar.vue';
	import About from './About.vue';
	import Skill from './Skill.vue';
	import Project from './Project.vue';
	import Resume from './Resume.vue';
	import Footer from './Footer.vue';

	export default {
	  components: {
	    Navbar,
	    About,
	    Skill,
	    Project,
	    Resume,
	    Footer,
	  },
	  data () {
	    return {}
	  },
	}
</script>

<style lang="scss" scoped>
	
</style>


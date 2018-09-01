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
	import navbar from './Navbar.vue';
	import about from './About.vue';
	import skill from './Skill.vue';
	import project from './Project.vue';
	import resume from './Resume.vue';
	// import Footer from './Footer.vue';

	export default {
	  components: {
	    navbar,
	    about,
	    skill,
	    project,
	    resume,
	    // Footer,
	  },
	  data () {
	    return {}
	  },
	}
</script>

<style lang="scss" scoped>
	
</style>


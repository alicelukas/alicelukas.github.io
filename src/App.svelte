<script>
	import Router from 'svelte-spa-router';
	import Menu from './lib/Menu.svelte';
  	import Routes from './lib/Routess.svelte';
	import menulist from './lib/menu';

	const routes = {
		'/': Routes,
		"/dailyquest": Routes,
		"/encent": Routes,
		"/inyean": Routes,
		"/emoji": Routes,
		"/optimization": Routes,
		"/jewel": Routes,
		"/dungeon": Routes,
		"/etcinfo": Routes,
	};
</script>

<main>
	<center>
		<a href="https://github.com/alicelukas/alicelukas.github.io"><img src="icon.png"></a>
	</center>
	<Menu {menulist} />
	<hr>
	<Router {routes}/>
</main>

<style>
	main {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		min-height: 101vh;
		padding: 1em;
	}

	main :global(.meta) {
		color: #999;
		font-size: 12px;
		margin: 0 0 1em 0;
	}

	a {
		width: 100px;
		height: 100px;
	}

	img {
		width: 100px;
		height: 100px;
	}
</style>
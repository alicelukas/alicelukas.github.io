<script>
	import Router from 'svelte-spa-router';
	import Menu from './lib/Menu.svelte';
  	import Routes from './lib/Routess.svelte';
	import menulist from './lib/menu';

	const routes = {
		'/': Routes,
		"/dailyquest": Routes,
		"/incent": Routes,
		"/inyean": Routes,
		"/emoji": Routes,
		"/optimization": Routes,
		"/jewel": Routes,
		"/Dungeon": Routes,
		"/etcinfo": Routes,
	};
</script>

<main>
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
</style>
<script>
	export let menulist;
</script>

<nav>
	<span>|</span>{#each menulist as menu, i}
	<a rel="external" href={menu.url}>{menu.title}</a><span>|</span>
	{/each}
</nav>

<style>
    span {
        margin-left: 2px;
        margin-right: 2px;
    }
</style>
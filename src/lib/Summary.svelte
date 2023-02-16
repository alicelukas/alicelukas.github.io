<script>
	export let title;
	export let text;
	export let img;

	function handleImgError(e, where) {
		e.target.onerror = null;
		Array.from(e.target.parentNode.children).forEach(element => {
			element.srcset = "https://hgk28y.csb.app/empty-product-image.svg"
		})
		e.target.src = "https://hgk28y.csb.app/empty-product-image.svg"
	}
</script>

<article>
	<h2>{@html title}</h2>
	{#if text !== undefined}
		<p>{@html text}</p>
	{/if}
	{#if img !== undefined}
		{#each img as src, i}
			<img src={src} alt={title} on:error={handleImgError}/>
		{/each}
	{/if}
</article>

<style>
	article {
		position: relative;
		/* padding: 0 0 0 2em; */
		border-bottom: 1px solid #eee;
		overflow: auto;
	}

	h2 {
		font-size: 1em;
		margin: 0.5em 0;
	}

	img {
		max-width: -webkit-fill-available;
	}
</style>
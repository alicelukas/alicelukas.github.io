<script>
	import { onMount } from 'svelte';
    import List from './List.svelte';
	import menulist from './menu';

    let url;
    let title;
    let text;
    let img;

    async function hashchange() {
        const path = "/"+window.location.hash;
        url = menulist[0].url;
        title = menulist[0].title;
        text = menulist[0].text;
        img = menulist[0].img;

        menulist.forEach(x => {
            if (path.endsWith(x.url))
            {
                url = x.url;
                title = x.title;
                text = x.text;
                img = x.img;
                return false;
            }
        })
    }

    onMount(hashchange);
</script>

<svelte:window on:hashchange={hashchange}/>

<List {title} {text} {img} />

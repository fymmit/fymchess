<script>
    import Square from './Square.svelte';
    export let pieces;
    export let select;
    export let selected;
	let files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let ranks = new Array(8);
</script>

<div>
    {#each ranks as r, i}
        {#each files as f}
            <Square
                piece={pieces.find(p => p.pos === `${f}${8 - i}`)}
                file={ f }
                rank={ 8 - i }
                {select}
                {selected}
            />
        {/each}
    {/each}
</div>

<style>
	div {
		width: 800px;
		display: grid;
		grid-template-columns: auto auto auto auto auto auto auto auto;
		grid-gap: 0;
	}
</style>
<script>
    import Piece from './Pieces/Piece.svelte';
    export let file;
    export let rank;
    export let piece;
    export let select;
    export let selected;
    let dark = ['a', 'c', 'e', 'g'].includes(file) ? rank % 2 === 1 : rank % 2 === 0;
    $: isSelected = file+rank === selected;
</script>

<div class:dark class:isSelected on:click={() => select(file+rank)}>
    {#if piece}
        <Piece black={piece.black} type={piece.type} />
    {/if}
    <span>
        {`${file}${rank}`}
    </span>
</div>

<style>
    div {
        background: #a87b37;
        height: 100px;
        width: 100px;
        color: #664808;
        font-weight: 800;
        position: relative;
        cursor: default;
    }
    .dark {
        background: #664808;
        color: #a87b37;
    }
    .isSelected {
        background: #e9cb44;
    }
</style>
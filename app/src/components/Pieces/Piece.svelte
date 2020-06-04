<script>
    import Queen from './Queen.svelte';
    import King from './King.svelte';
    import Rook from './Rook.svelte';
    import Knight from './Knight.svelte';
    import Bishop from './Bishop.svelte';
    import Pawn from './Pawn.svelte';
    export let black;
    export let type;
    let piece;
    switch (type) {
        case 'queen':
            piece = Queen;
            break;
        case 'king':
            piece = King;
            break;
        case 'rook':
            piece = Rook;
            break;
        case 'knight':
            piece = Knight;
            break;
        case 'bishop':
            piece = Bishop;
            break;
        case 'pawn':
            piece = Pawn;
            break;
    }
</script>

<div class:black>
    {#if type === 'queen'}
        <Queen />
    {:else if type === 'pawn'}
        <Pawn />
    {:else if type === 'rook'}
        <Rook />
    {:else if type === 'knight'}
        <Knight />
    {:else if type === 'bishop'}
        <Bishop />
    {:else if type === 'king'}
        <King />
    {/if}
</div>

<style>
    div {
        position: absolute;
        color: white;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        font-size: 64px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }
    .black {
        color: black;
    }
</style>
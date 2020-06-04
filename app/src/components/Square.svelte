<script>
    export let file;
    export let rank;
    let dark = ['a', 'c', 'e', 'g'].includes(file) ? rank % 2 === 0 : rank % 2 === 1;
</script>

<div class:dark>
    <i class="fas fa-chess-queen"></i>
    <span>
        {`${file}${rank}`}
    </span>
</div>

<style>
    div {
        background: #a87b37;
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        color: #664808;
        font-weight: 800;
    }
    div.dark {
        background: #664808;
        color: #a87b37;
    }
</style>
<script>
	import setup from './helpers/boardsetup.js';
	import Board from './components/Board.svelte';
	let pieces = setup();
	let selected = '';
	function select(square) {
		if (selected.length > 0) {
			move(selected, square);
			selected = '';
		} else if (selected === square) {
			selected = '';
		} else if (pieces.find(({ pos }) => pos === square)) {
			selected = square;
		}
	}
	function move(from, to) {
		const fromPiece = pieces.find(p => p.pos === from);
		const newPiece = {
			...fromPiece,
			pos: to
		}
		pieces = pieces.filter(({ pos }) => pos !== from && pos !== to).concat(newPiece);
	}
</script>

<main>
	<Board {pieces} {select} {selected} />
</main>

<style>
</style>
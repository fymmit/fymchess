export default () => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let pieces = [];
    pieces.push(
        {
            type: 'queen',
            black: false,
            pos: 'd1'
        },
        {
            type: 'queen',
            black: true,
            pos: 'd8'
        },
        {
            type: 'king',
            black: false,
            pos: 'e1'
        },
        {
            type: 'king',
            black: true,
            pos: 'e8'
        },
        {
            type: 'rook',
            black: false,
            pos: 'a1'
        },
        {
            type: 'rook',
            black: false,
            pos: 'h1'
        },
        {
            type: 'rook',
            black: true,
            pos: 'a8'
        },
        {
            type: 'rook',
            black: true,
            pos: 'h8'
        },
        {
            type: 'knight',
            black: false,
            pos: 'b1'
        },
        {
            type: 'knight',
            black: false,
            pos: 'g1'
        },
        {
            type: 'knight',
            black: true,
            pos: 'b8'
        },
        {
            type: 'knight',
            black: true,
            pos: 'g8'
        },
        {
            type: 'bishop',
            black: false,
            pos: 'c1'
        },
        {
            type: 'bishop',
            black: false,
            pos: 'f1'
        },
        {
            type: 'bishop',
            black: true,
            pos: 'c8'
        },
        {
            type: 'bishop',
            black: true,
            pos: 'f8'
        }
    );
    files.forEach(file => {
        pieces.push(
            {
                type: 'pawn',
                black: false,
                pos: file + 2
            },
            {
                type: 'pawn',
                black: true,
                pos: file + 7
            }
        );
    });
    return pieces;
}
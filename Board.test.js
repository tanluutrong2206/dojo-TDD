const TicTacToeGame = require('./TicTacToeGame');

describe('Board', () => {
  test('test init board', () => {
    const game = new TicTacToeGame();

    expect(game.boards.length).toBe(7);
    expect(game.boards[0].length).toBe(7);
  });

  test('test init player', () => {
    const game = new TicTacToeGame();

    expect(game.players.length).toBe(2);
  });

  test('test player sign', () => {
    const game = new TicTacToeGame();

    expect(game.players[0].sign).toBe('X');
    expect(game.players[1].sign).toBe('O');
  });

  test('test start game', () => {
    const game = new TicTacToeGame();

    expect(game.playerMoveFirst).toBe(null);

    game.start();

    expect(game.playerMoveFirst.sign).toBe('X');
  });

  // test('test existed position', (x, y) => {
  //   const t = () => {
  //     throw new TypeError('UNKNOWN ERROR');
  //   };

  //   const game = new TicTacToeGame();
  //   if (game.boards[x][y] !== 0) {
  //     expect(t).toThrow('Existed');
  //   }
  // });
});

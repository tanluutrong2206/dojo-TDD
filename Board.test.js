const TicTacToeGame = require('./TicTacToeGame');
const Location = require('./Location');

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

  test('test check action', () => {
    const game = new TicTacToeGame();
    const location = new Location({ x: 1, y: 2 });
    game.start();
    game.action(location);
    expect(game.boards[1][2]).toBe('X');
  });

  test('test second action', () => {
    const game = new TicTacToeGame();
    const location1 = new Location({ x: 1, y: 2 });
    const location2 = new Location({ x: 2, y: 2 });
    game.start();
    game.action(location1);
    game.action(location2);
    expect(game.boards[2][2]).toBe('O');
  });
});

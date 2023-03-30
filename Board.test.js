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

    expect(game.playerTurn).toBe(null);

    game.start();

    expect(game.playerTurn.sign).toBe('X');
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
    expect(game.boards[2][2]).toBe('O'); // em sửa test chỗ này
  });
  test('test not allow rewrite sign', () => {
    const game = new TicTacToeGame();
    const location1 = new Location({ x: 1, y: 2 });
    const location2 = new Location({ x: 1, y: 2 });
    game.start();
    game.action(location1);
    game.action(location2);
    expect(game.playerTurn.sign).toBe('O');
    expect(game.boards[1][2]).toBe('X');
  });

  test.skip('test should it win when 5 in a horizontal row', () => {});
  test('test should it count the number of X and O in a vertical row', () => {
    const game = new TicTacToeGame();

    game.start();
    for (let i = 0; i < 4; i++) {
      const location1 = new Location({ x: i, y: 0 });
      const location2 = new Location({ x: i, y: 1 });
      game.action(location1);
      game.action(location2);
    }

    const count = game.countVerticalNumberLastAction(
      new Location({ x: 3, y: 0 })
    );
    expect(count).toBe(4);
  });

  test('test should it count the number of X and O in a horizontal row', () => {
    const game = new TicTacToeGame();

    game.start();
    for (let i = 0; i < 4; i++) {
      const location1 = new Location({ x: 0, y: i });
      const location2 = new Location({ x: 1, y: i });
      game.action(location1);
      game.action(location2);
    }

    const count = game.countHorizontalNumberLastAction(
      new Location({ x: 0, y: 3 })
    );
    expect(count).toBe(4);
  });

  test.skip('test should it win when 5 in a vertical row', () => {
    const game = new TicTacToeGame();

    game.start();
    for (let i = 0; i < 4; i++) {
      const location1 = new Location({ x: i, y: 0 });
      const location2 = new Location({ x: i, y: 1 });
      game.action(location1);
      game.action(location2);
    }
    const locationFinish = new Location({ x: 4, y: 0 });

    expect(game.isEnd).toBe(false);
    expect(game.wonPlayer).toBe(undefined);

    game.action(locationFinish);
    expect(game.isEnd).toBe(true);
    expect(game.wonPlayer.sign).toBe('X');
  });

  test('test should it count the number of X and O in a diagonal row', () => {
    const game = new TicTacToeGame();

    game.start();
    for (let i = 0; i < 4; i++) {
      const location1 = new Location({ x: i, y: i });
      const location2 = new Location({ x: i + 1, y: i });
      game.action(location1);
      game.action(location2);
    }
    const count = game.countDiagonalLeftNumberLastAction(
      new Location({ x: 4, y: 3 })
    );
    expect(count).toBe(4);
  });

  test('test should it count the number of X and O in right diagonal row', () => {
    const game = new TicTacToeGame();

    game.start();
    for (let i = 1; i <= 4; i++) {
      const locationX = new Location({
        x: i,
        y: game.size - i,
      });
      const locationO = new Location({
        x: i,
        y: game.size - i - 1,
      });

      game.action(locationX);
      game.action(locationO);
    }
    const count = game.countDiagonalRightNumberLastAction(
      new Location({ x: 2, y: 3 })
    );
    expect(count).toBe(4);
  });
});

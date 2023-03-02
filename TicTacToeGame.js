class Person {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }
}

class TicTacToeGame {
  constructor() {
    this.boards = new Array(7).fill(new Array(7).fill(0));
    this.players = [new Person('Jack', 'X'), new Person('Rose', 'O')];
    this.playerMoveFirst = null;
  }

  start() {
    this.playerMoveFirst = this.players[0];
  }
}

module.exports = TicTacToeGame;

const _ = require('lodash');

class Person {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }
}

class TicTacToeGame {
  constructor() {
    this.defaultValue = '_';
    this.size = 7;
    this.boards = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => this.defaultValue)
    );
    this.players = [new Person('Jack', 'X'), new Person('Rose', 'O')];
    this.playerTurn = null;
  }

  start() {
    this.playerTurn = this.players[0];
  }
  action(location) {
    if (this.boards[location.x][location.y] !== this.defaultValue) return;

    this.boards[location.x][location.y] = this.playerTurn.sign;
    this.playerTurn = this.players.find(
      ({ sign }) => sign !== this.playerTurn.sign
    );
  }

  countVerticalNumberLastAction(location) {
    const currentSign = this.boards[location.x][location.y];
    let count = 0;

    for (let i = location.x; i >= 0; i--) {
      if (this.boards[i][location.y] === currentSign) {
        count++;
      } else {
        break;
      }
    }
    for (let j = location.x; j < this.size; j++) {
      if (this.boards[j][location.y] === currentSign) {
        count++;
      } else {
        break;
      }
    }

    return count - 1;
  }
  countHorizontalNumberLastAction(location) {
    let count = 0;
    const currentSign = this.boards[location.x][location.y];

    for (let i = location.y; i >= 0; i--) {
      if (this.boards[location.x][i] === currentSign) {
        count++;
      } else {
        break;
      }
    }

    for (let j = location.y; j < this.size; j++) {
      if (this.boards[location.x][j] === currentSign) {
        count++;
      } else {
        break;
      }
    }
    return count - 1;
  }

  countDiagonalLeftNumberLastAction(location) {
    const currentPlayerSign = this.boards[location.x][location.y];
    let count = 0;

    for (let i = 0; location.y - i >= 0; i++) {
      if (this.boards[location.x - i][location.y - i] === currentPlayerSign) {
        count++;
      } else {
        break;
      }
    }
    for (let j = 0; location.y + j < this.size; j++) {
      if (this.boards[location.x + j][location.y + j] === currentPlayerSign) {
        count++;
      } else {
        break;
      }
    }

    return count - 1;
  }
  countDiagonalRightNumberLastAction(location) {
    const currentPlayerSign = this.boards[location.x][location.y];
    let count = 0;
    const currentX = location.x;
    const currentY = location.y;
    // 2 3
    for (let i = 0; currentX + i < this.size; i++) {
      if (this.boards[currentX + i][currentY + i] === currentPlayerSign) {
        count += 1;
      }
    }
    for (let i = 0; currentX - i >= 0; i++) {
      if (this.boards[currentX - i][currentY - i] === currentPlayerSign) {
        count += 1;
      }
    }

    return count - 1;
  }
}

module.exports = TicTacToeGame;

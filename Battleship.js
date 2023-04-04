function createShip(length) {
  return {
    length: length,
    hitCount: 0,
    sunk: false,

    /* hit() {
      return this.hitCount += 1;
    },

    isSunk() {
      if(this.hitCount == this.length) {
        return true;
      } else {
        return false;
      }
    }, */
  }    
}

function createGameBoard() {
  return {

  }
}

module.exports = { createShip }
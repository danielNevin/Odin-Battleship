function createShip(length) {
  return {
    length: length,
    hits: new Array(),
    sunk: false,

    hit: function(point) {
      if (this.hits.includes(point) || point < 0 || point >= this.length) {
        return
      } else {
        this.hits.push(point);
      }
    },

    isSunk: function() {
      if(this.hits.length == this.length) {
        return true;
      } else {
        return false;
      }
    },
  }    
}

module.exports = { createShip }
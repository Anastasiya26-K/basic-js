const chainMaker = {
  newArr: [],

  getLength() {
    return this.newArr.length;
  },

  addLink(value) {
    this.newArr.push(value);
    return this;
  },

  removeLink(position) {
    if (position < 1 || typeof(position)!="number") {
      this.newArr = []
      throw Error();
    }
    this.newArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.newArr.reverse();
    return this;
  },

  finishChain() {
    let theChain = this.newArr.join('~~');
    this.newArr.splice(0, this.newArr.length)
    return theChain;
  }
};

module.exports = chainMaker;





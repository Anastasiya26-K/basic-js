const CustomError = require("../extensions/custom-error");

const chainMaker = {
    newArr = [],
  getLength() {
    return this.newArr.length;
  },
  addLink(value) {
    this.newArr.push(value);
      return this;
  },
  removeLink(position) {
      if (position < 1 || typeof(position)!="number") {
        this.newArr = [];
        throw Error();
          }
          this.newArr.splice(position - 1, 1);
          return this;
        },
  reverseChain() {
    this.newArr.reverse()
    return this
  },
  finishChain() {
    for (let i = 0; i < this.myArr.length; i++) {
      if (i !== this.chain.length - 1) {
    result = this.newArr.join('~~');
       this.newArr.splice(0, this.myArr.length)
      }
    }
    return result
      }
};

module.exports = chainMaker;

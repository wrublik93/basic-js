const chainMaker = {
  simpleChain: [],
  getLength() {
    return this.simpleChain.length;
  },
  addLink(value) {
    let stringAddLink = `( ${value} )`;
    this.simpleChain.push(stringAddLink);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || this.simpleChain.length < position || position - 1 < 0){
      this.simpleChain = [];
      throw new Error();
    }
    this.simpleChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.simpleChain.reverse();
    return this;
  },
  finishChain() {
    finishStringChain = this.simpleChain.join('~~');
    this.simpleChain = [];
    return finishStringChain;
  }
};

module.exports = chainMaker;

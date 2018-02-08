class AbstractBaseClass {
  constructor(name) {
    this.name = name;
  }

  setName(name){
    this.name = name;
  }
  
  getName(){
    return this.name;
  }

  hello() {
    return `hello world ${this.name}`;
  }
}

module.exports = AbstractBaseClass;
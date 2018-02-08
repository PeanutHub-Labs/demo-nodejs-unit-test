const AbstractBaseClass  = require('./AbstractBaseClass');

class HelloWorld extends AbstractBaseClass{

  constructor(){
    super('David');
  }
}

const singleton = new HelloWorld();
module.exports = singleton;
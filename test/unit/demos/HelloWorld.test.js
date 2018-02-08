
'use strict';
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

describe('HelloWorld', () => {
  const helloWorldTest = null;

  // Setting things up....
  beforeAll(() => {
    helloWorldTest = require('./../../../src/demos/HelloWorld');
  });

  afterEach(() => {
    sandbox.restore();
  });

  
  it('should pass sanity check', () => {
    expect(helloWorldTest).toBeDefined();
  });

  it('should return "hello world" string when call hello() method', () => {
    console.log(helloWorldTest);
    expect(helloWorldTest.hello()).toContain('hello world');
  });
});

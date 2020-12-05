"use strict"

const { expect } = require('chai')
const { myVar } = require('../index')


describe('Variable', () => {
  it('myVar should not be undefined', () => {
    expect(myVar).to.not.be.undefined;
  })
  it('myVar should be defined as Hello World!', () => {
    expect(myVar).to.equal('Hello World!')
  })
})


const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('report NaN if the input has more NaNs than readings', ()=> {
  expect(average([NaN, 1, NaN, 2, NaN, NaN, 3, NaN, 4, NaN, NaN])).to.be.NaN;
});

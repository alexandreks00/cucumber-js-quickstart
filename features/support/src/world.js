var World

module.exports.World = World = function (callback) {
  var Calc;
  Calc = require('./models/calc');
  this.calc = new Calc();
  callback();
};

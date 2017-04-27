/* flow */

const Calc = (function () {
  function Calc() {
    return;
  }

  Calc.prototype.currentSum = Number(0);

  Calc.prototype.clearCalculator = function () {
    this.currentSum = 0;
  };

  Calc.prototype.add = function (arg) {
    this.currentSum += Number(arg);
  };

  Calc.prototype.subtract = function (arg) {
    this.currentSum -= Number(arg);
  };

  Calc.prototype.result = function () {
    return Number(this.currentSum);
  };

  return Calc;
}());

module.exports = Calc;

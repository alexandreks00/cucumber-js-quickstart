

module.exports = function () {
  this.World = require('../support/src/world').World

  this.Given(/^the calculator is cleared$/, function (callback) {
    this.calc.clearCalculator()
    callback()
  })

  this.When(/^I add (-?\d+) and (-?\d+)$/, function (arg1, arg2, callback) {
    this.calc.add(arg1)
    this.calc.add(arg2)

    callback()
  })

  this.When(/^I add (-?\d+)$/, function (arg1, callback) {
    this.calc.add(arg1)
    callback()
  })

  this.When(/^I subtract (-?\d+)$/, function (arg1, callback) {
    this.calc.subtract(arg1)
    callback()
  })

  this.When(/^I subtract (-?\d+) from (-?\d+)$/, function (arg1, arg2, callback) {
    this.calc.add(arg2)
    this.calc.subtract(arg1)
    callback()
  })

  this.Then(/^the result should be (-?\d+)$/, function (arg1, callback) {

    if (Number(this.calc.result()) !== Number(arg1)) {

      callback.fail()
    }

    callback()

  })
}

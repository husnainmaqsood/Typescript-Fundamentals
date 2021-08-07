/// <reference path="namespace.ts" />
var util = Utility.Fees; // we are creating an alias so that we have to type less in future to use this module
var fee = util.CalculateLateFee(10);
console.log("Fee " + fee);

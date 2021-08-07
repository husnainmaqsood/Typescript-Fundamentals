var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBookAllower(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBookAllower = MaxBookAllower;
    function privateFunc() {
        console.log("This is private...");
    }
})(Utility || (Utility = {}));
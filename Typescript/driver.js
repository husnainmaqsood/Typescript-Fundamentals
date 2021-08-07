define("Person", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Person = void 0;
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (age) {
                this._age = age;
            },
            enumerable: false,
            configurable: true
        });
        Person.prototype.print = function () {
            console.log(this.name + " is " + this.age + " years old");
        };
        return Person;
    }());
    exports.Person = Person;
    ;
});
define("driver", ["require", "exports", "Person"], function (require, exports, Person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var person = new Person_1.Person("Husnain", 23);
    person.print();
});

"use strict";
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "A typescript greeting for you, " + name;
    };
    return Greeter;
}());
module.exports = Greeter;

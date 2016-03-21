var should = require("should");
var greeter = require("../dist/scripts/lib/tsCode.js");

describe("Typescript is compiled ok", function() {
    it("when this passed", function() {
        var g = new greeter();
        g.greet("Yo").should.equal("A typescript greeting for you, Yo");
    });
});

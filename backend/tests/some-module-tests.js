var someModule = require("../src/some-module.js");
var assert = require("assert");

describe('Some module', function() {
    describe('hello', function() {
        it('should default greeting', function() {
            assert.equal("Hello World!", someModule.hello());
        })
    })
});

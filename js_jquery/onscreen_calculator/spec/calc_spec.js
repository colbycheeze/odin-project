var Calc = require('../Calc.js');

describe("Calc", function() {
  var calc;

  beforeEach(function() {
    calc = new Calc();
  });

  describe("Warmup", function() {

    it("#my_max returns the max number in an array", function() {
      var arr = [1,2,3,4,2,7,5];
      expect(calc.my_max(arr)).toEqual(7);
    });

    it("#vowel_count returns the number of vowels in a string", function() {
      var phrase = "This is a sentance with 9 vowels";
      var result = calc.vowel_count(phrase);
      expect(result).toEqual(9);
    });

    it("#reverse returns the inverse of a string", function() {
      var phrase = "Reverse me pls.";
      var result = calc.reverse(phrase);
      expect(result).toEqual(".slp em esreveR");
    });
  });

  it("#add takes two numbers and adds them together", function() {
    var result = calc.add(2,2);
    expect(result).toEqual(4);
  });

  it("#multiply takes two numbers and returns multiplied value", function() {
    var result = calc.multiply(3,3);
    expect(result).toEqual(9);
  });

  it("#divide takes two numbers and returns divided value", function() {
    var result = calc.divide(10,2);
    expect(result).toEqual(5);
  })

  it("#subtract takes two numbers and returns subtracted value", function() {
    var result = calc.subtract(2,2);
    expect(result).toEqual(0);
  })

  //TODO Write additonal tests!
});


var Calc = function() {
  this._leftNum = "";
  this._rightNum = "";
  this._isLeft = true;
  this._operator = "";
  this._result = 0;
};

Calc.prototype.my_max = function(nums) {
  var max = 0;
  for( var i=0; i<nums.length; i++ ) {
    if( nums[i] > max ) max = nums[i];
  }
  return max;
};

var isVowel = function(letter) {
  var vowels = ["A","E","I","O","U"];
  return vowels.indexOf(letter.toUpperCase()) >= 0;
}
Calc.prototype.vowel_count = function(phrase) {
  var count = 0;

  for( var i=0; i<phrase.length; i++ ) {
    if( isVowel(phrase[i]) ) count += 1;
  }
  return count;
};

Calc.prototype.reverse = function(phrase) {
  return phrase.split("").reverse().join("");
};

Calc.prototype.add = function(n1, n2) {
  return parseFloat(n1) + parseFloat(n2);
};

Calc.prototype.subtract = function(n1, n2) {
  return n1 - n2;
};

Calc.prototype.multiply = function(n1, n2) {
  return n1 * n2;
};

Calc.prototype.divide = function(n1, n2) {
  return n1 / n2;
};

Calc.prototype.modulus = function(n1, n2) {
  return n1 % n2;
};

Calc.prototype.addNumberToBuffer = function(num) {
  this._isLeft ? this._leftNum += num : this._rightNum += num;
};

Calc.prototype.addOperatorToBuffer = function( operator ) {
  this._operator = operator;
  this._isLeft = false;
};

Calc.prototype.calculate = function() {
  if ( this._rightNum == "" ) return;

  var result;

  switch( this._operator ) {
    case "-":
          result  = calc.subtract(this._leftNum, this._rightNum );
          break;
    case "+":
          result  = calc.add(this._leftNum, this._rightNum );
          break;
    case "/":
          result  = calc.divide(this._leftNum, this._rightNum );
          break;
    case "x":
          result  = calc.multiply(this._leftNum, this._rightNum );
          break;
    case "%":
          result  = calc.modulus(this._leftNum, this._rightNum );
          break;
    default:
          result = "UH OH!";
          break;
  }

  this._leftNum = result;
  this._rightNum = "";
  this._operator = "";
};

Calc.prototype.getFullBuffer = function() {
  return this._leftNum + this._operator + this._rightNum;
};

Calc.prototype.clearBuffer = function() {
  this._leftNum = "";
  this._rightNum = "";
  this._isLeft = true;
  this._operator = "";
};

var isOperator = function( operator ) {
  var validOperators = [ "+", "-", "/", "x", "%" ];
  return validOperators.indexOf( operator ) >= 0;
};

var processClick = function( clicked, calc ) {
  if( !isNaN( clicked ) || clicked == "." ) {
    calc.addNumberToBuffer( clicked );
  } else if ( isOperator(clicked) ) {
    calc.addOperatorToBuffer(clicked);
  } else if ( clicked == "=" ) {
    calc.calculate();
  } else if ( clicked == "C" ) {
    calc.clearBuffer();
  }
}

$(document).ready(function() {
  calc = new Calc();

  $(".key").click(function() {
    processClick( $(this).html(), calc );
    $("#display").html( calc.getFullBuffer() );
  });
});



//module.exports = Calc;



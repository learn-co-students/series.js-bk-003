'use strict';

function Series(num){
  this.digits = numtoArray(num);
};

function numtoArray (num) {
	var numArr = num.toString().split("");
	for (var i = 0; i < numArr.length; i++) {
		numArr[i] = parseInt(numArr[i]);
	};
	return numArr;
}

Series.prototype.slices = function(number) {
	// return this.digits
	if (number > this.digits.length) {throw new Error('Slice size is too big.')};

	var arr = []

	for (var i = 0; i + number <= this.digits.length; i++) {
		var innerArr = [];
		for (var j = i, k =0; k < number; j++, k++) {
			innerArr.push(this.digits[j]);
		};
		arr.push(innerArr);
	};
	return arr;
};
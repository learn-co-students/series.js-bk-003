'use strict';

function Series(nums){
  // add your solution here!
	this.digits = nums.split('')
	for (var i=0;i<this.digits.length;i++) {
		this.digits[i] = Number(this.digits[i])
  	}
};

Series.prototype.slices = function(num) {
	// body...
	var arr = []
	var nums = this.digits
	if (num>nums.length) {
		throw new Error('Slice size is too big.')
	}
	for (var i=0; i<nums.length-(num-1);i++) {
		// debugger
		var arr2 = []
			for (var i2=i; i2<num+i; i2++) {
				arr2.push(nums[i2])
			}
			arr.push(arr2)
		}
	return arr
};
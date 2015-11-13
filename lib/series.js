'use strict';

function Series(number) { 
  this.digits = number.split("").map(Number);
};

Series.prototype.slices = function(slice) {
  var finalArr = [];
  var holderArr = this.digits;
  if (slice > this.digits.length){
    throw new Error('Slice size is too big.');
  }
  else {
    for (var i = 0; i < this.digits.length; i++) {
      var innerArr = []
      for (var x = 0; x < slice; x++) {
        if (this.digits[i + x] == undefined) { 
          break; 
        }
        else {
        innerArr.push(this.digits[i + x]);
        }
      }
      if (innerArr.length == slice){
      finalArr.push(innerArr);
      }
    }
   }
  return finalArr;
};
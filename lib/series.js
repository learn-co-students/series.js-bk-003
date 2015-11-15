'use strict';

function Series(numbers){
  this.digits = this.splitNumber(numbers)
};

Series.prototype.splitNumber = function(numbers){
  var digitArray = []
  numbers.split("").forEach(function(n){
    digitArray.push(+n)
  })
  return digitArray
}

Series.prototype.slices = function(limit){
  var digits = this.digits
  
  if (limit <= digits.length) {
    var series = []
    var group = []

    for (var i = 0; i < digits.length; i++) {
      group = digits.slice(0 + i, limit + i)
      if (group.length <  limit){ break; }

      series.push(group)
    }

    return series;
  }
  else {
    throw new Error('Slice size is too big.');
  }   
}




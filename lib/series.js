'use strict';

function Series(string){
  this.digits = string.split("").map(function(m){return +m;});
}

Series.prototype.slices = function(number) {
  var array =[], i = number;
  if (this.digits.length < number){
  	throw new Error("Slice size is too big.");
  }else{
    for(let k = 0; k< this.digits.length ; ++k){
      if (this.digits.slice(k,i).length === number){	
        array.push(this.digits.slice(k,i)); 
      }
      ++i;
    }
  }
return array;
 
};

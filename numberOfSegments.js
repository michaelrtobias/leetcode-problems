var countSegments = function(s) {
  return s.split(" ").filter(function(n){return n}).length;
};


console.log(countSegments(""))
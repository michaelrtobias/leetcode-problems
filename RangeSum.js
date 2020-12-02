var NumArray = function (nums) {
  this.sums = [];
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    sum += currentNum;
    this.sums.push(sum);
  }
};

NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};

console.log(NumArray([[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]));
var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));

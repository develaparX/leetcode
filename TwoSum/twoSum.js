function twosum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
}

console.log(twosum([2, 7, 11, 15], 9)); // Output: [0, 1]

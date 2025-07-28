function twoSum(nums, target) {
  const nTi = {};

  for (let index = 0; index < nums.length; index++) {
    const f = target - nums[index];

    if (nTi[f] !== undefined) {
      return [index, nTi[f]];
    }
    nTi[nums[index]] = index;
  }
}

console.log(twoSum([1, 2, 3, 4], 5));

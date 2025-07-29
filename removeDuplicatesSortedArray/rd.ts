function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    nums.sort()

    let indexUnik = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[indexUnik++] = nums[i]
        }
    }
    return indexUnik;
}

const nums = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 1, 1, 5, 1, 3];
const newLength = removeDuplicates(nums);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [1, 2]
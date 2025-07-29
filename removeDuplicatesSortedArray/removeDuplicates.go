package main

import (
	"fmt"
	"sort"
)

func removeDuplicates(nums []int) ([]int, int) {
	if len(nums) == 0 {
		return []int{}, 0
	}

	sort.Ints(nums)

	indexUnik := 1
	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[i-1] {
			nums[indexUnik] = nums[i]
			indexUnik++
		}
	}

	return nums[:indexUnik], indexUnik
}

func main() {
	nums := []int{1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 1, 1, 5, 1, 3, 8}
	uniqueNums, newLength := removeDuplicates(nums)

	fmt.Println("Unique Length:", newLength)
	fmt.Println("Unique Slice:", uniqueNums)
}

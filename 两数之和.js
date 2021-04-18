/*
 * @Description: 两数之和
 * @Author: 管铭钊
 * @Date: 2021/4/18
 */
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// https://leetcode-cn.com/problems/two-sum/

// 双重循环
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return null
}

// Map实现
const twoSumByMap = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const difference = target - item
        if (map.has(difference)) {
            return [map.get(difference), i]
        }
        map.set(item, i)
    }
}

console.log(twoSum([1, 23, 2, 4, 5, 12], 13), "twoSum([1, 23, 2, 4, 5, 12], 13)")
console.log(twoSumByMap([1, 23, 2, 4, 5, 12], 13), "twoSumByMap([1, 23, 2, 4, 5, 12], 13)")

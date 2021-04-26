/*
 * @Description: 视源一面
 * @Author: 管铭钊
 * @Date: 2021/4/26
 */
// 题目描述
// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5

function getMiddleNum(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2].sort()
    const length = mergedArr.length
    return length % 2
        ? mergedArr[Math.floor(length / 2)]
        : (mergedArr[length / 2] + mergedArr[length / 2 - 1]) / 2
}

console.log(getMiddleNum([1, 3], [2]), "getMiddleNum([1, 3], [2])")
console.log(getMiddleNum([1, 2], [3, 4]), "getMiddleNum([1, 2], [3, 4])")

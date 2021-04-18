/*
 * @Description: 大数相加
 * @Author: 管铭钊
 * @Date: 2021/4/18
 */
// 415. 字符串相加 - 力扣（LeetCode）
// https://leetcode-cn.com/problems/add-strings/
// 给定两个字符串形式的非负整数num1 和num2，计算它们的和。
// 提示：
// num1 和 num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式

// 逐位相加实现
const addStrings = function (num1, num2) {
    // 补零
    const maxLength = Math.max(num1.length, num2.length)
    const fullNum1 = num1.padStart(maxLength, '0')
    const fullNum2 = num2.padStart(maxLength, '0')
    // 倒序遍历进位相加
    let carry = 0
    let bitResult = 0
    let result = ''
    for (let i = maxLength - 1; i >= 0; i--) {
        bitResult = parseInt(fullNum1[i], 10) + parseInt(fullNum2[i], 10) + carry
        carry = Math.floor(bitResult / 10)
        result = bitResult % 10 + result
    }
    if (carry === 1) {
        return '1' + result
    }
    return result
}

// bigInt实现
const addStringsByBigInt = function (num1, num2) {
    num1 = BigInt(num1)
    num2 = BigInt(num2)
    return (num1 + num2).toString()
}

console.log(addStrings('1231231231232', '99999999999999'), "addStrings('1231231231232', '99999999999999')")

console.log(addStringsByBigInt('1231231231232', '99999999999999'), "addStringsByBigInt('1231231231232', '99999999999999')")

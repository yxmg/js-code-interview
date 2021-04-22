/*
 * @Description: 查找重复字符串
 * @Author: 管铭钊
 * @Date: 2021/4/22
 */

// 查找出现次数最多
function getMaxCountStr(str) {
    const obj = {}
    let maxKey = ''
    for (let i = 0; i < str.length; i++) {
        const key = str[i]
        obj[key] = !obj[key] ? 1 : obj[key] + 1
        if (maxKey === '' || obj[key] > obj[maxKey]) {
            maxKey = key
        }
    }
    return maxKey
}

console.log(getMaxCountStr('1223334444'), `getMaxCountStr('1223334444')`)

// 查找出现次数最多且ASCII最小的字符
function getMaxCountAndLowASCIIStr(str) {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        const key = str[i]
        obj[key] = !obj[key] ? 1 : obj[key] + 1
    }
    const keys = Object.keys(obj)
    keys.sort((a, b) => {
        if (obj[a] === obj[b]) {
            return a.charCodeAt() - b.charCodeAt()
        } else {
            return obj[b] - obj[a]
        }
    })
    return keys[0]
}

// 查找出现次数最多且ASCII最小的字符V2：一个循环
function getMaxCountAndLowASCIIStrV2(str) {
    const obj = {}
    let exceptKey = ''
    for (let i = 0; i < str.length; i++) {
        const key = str[i]
        obj[key] = !obj[key] ? { count: 1, charCode: key.charCodeAt() } : { ...obj[key], count: obj[key].count + 1 }

        if (
            exceptKey === '' ||
            (obj[key].count > obj[exceptKey].count) ||
            (obj[key].count === obj[exceptKey].count && obj[key].charCode < obj[exceptKey].charCode)
        ) {
            exceptKey = key
        }
    }
    return exceptKey
}

console.log(getMaxCountAndLowASCIIStr('aaaddddcccbbbb'), `getMaxCountAndLowASCIIStr()`)
console.log(getMaxCountAndLowASCIIStrV2('aaaddddcccbbbb'), `getMaxCountAndLowASCIIStrV2()`)

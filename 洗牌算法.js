/*
 * @Description: 洗牌算法
 * @Author: 管铭钊
 * @Date: 2021/5/12
 */

function shuffle(arr) {
    let arrCopy = [...arr]
    const getIndexRandomly = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }
    return (count) => {
        const result = []
        for (let i = 0; i < count; i++) {
            // arrCopy为空时开启下一轮循环
            if (arrCopy.length === 0) {
                arrCopy = arr
            }
            // 随机从arr从删除元素
            const choose = arrCopy.splice(getIndexRandomly(arrCopy), 1)
            result.push.apply(result, choose)
        }
        return result
    }
}

// 测试1
const random1 = shuffle([0, 1, 2, 3, 4, 5, 6])
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")
console.log(random1(1), "random1(1)")

// 测试2
const random2 = shuffle([0, 1, 2, 3, 4, 5, 6])
console.log(random2(1), "random2(1)")
console.log(random2(2), "random2(2)")
console.log(random2(1), "random2(1)")
console.log(random2(4), "random2(4)")

/*
 * @Description: 杨辉三角
 * @Author: 管铭钊
 * @Date: 2021/4/20
 */

function numTriangle(rowLength) {
    const result = []
    for (let i = 0; i < rowLength; i++) {
        const rows = []
        for (let j = 0; j < i + 1; j++) {
            if (j === i || j === 0) {
                rows.push(1)
            } else {
                rows.push(result[i - 1][j - 1] + result[i - 1][j])
            }
        }
        result.push(rows)
    }

    return result.map((row, index) => {
        return ' '.repeat(result.length - index - 1) + row.join(' ')
    }).join('\n')
}
console.log(numTriangle(5), "numTriangle(5)")

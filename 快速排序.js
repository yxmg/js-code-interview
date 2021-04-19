/*
 * @Description: 快速排序
 * @Author: 管铭钊
 * @Date: 2021/4/19
 */
function quickSort(arr, desc) {
    // length小于等于1，不需要排序，直接返回
    if (arr.length <= 1) {
        return
    }
    _quickSort(arr, 0, arr.length - 1, desc)
}

function _quickSort(arr, left, right, desc) {
    // 选择基准值并将数组分为比其大和比其小的两部分，返回基准值的下标
    const index = partition(arr, left, right, desc)
    if (left >= right) {
        return arr
    }
    // 递归处理左右两部分
    _quickSort(arr, left, index - 1, desc)
    _quickSort(arr, index + 1, right, desc)
}

// 挖坑
function partition(arr, left, right, desc) {
    // 初始化基准值
    let index = left
    const pivot = arr[index]
    // 交换元素（挖坑）
    while (right >= left) {
        // right从右向左（当右边小于基准值，说明需要交换）
        while (right >= left) {
            if (desc ? arr[right] > pivot : arr[right] < pivot) {
                arr[left] = arr[right]
                index = right
                left++
                break
            }
            right--
        }
        // left从左向右（当左边大于基准值，说明需要交换）
        while (right >= left) {
            if (desc ? arr[left] < pivot : arr[left] > pivot) {
                arr[right] = arr[left]
                index = left
                right--
                break
            }
            left++
        }
    }
    // 将基准值放中间
    arr[index] = pivot
    // 返回基准值下标
    return index
}

// TODO：交换指针
function partitionByExchange(arr, left, right, desc) {

}

// 不考虑空间复杂度可以这么玩，简洁些
function quickSortIgnoreSpace(arr, desc) {
    if (arr.length <= 1) {
        return arr
    }
    let leftArr = [], rightArr = [], pivot = arr.splice(0, 1)[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return quickSortIgnoreSpace(leftArr, desc).concat([pivot], quickSortIgnoreSpace(rightArr, desc))
}

// TODO: 用栈代替递归
function quickSortByStack() {

}

const arr = [4, 12, 3, 4, 10, 2, 1, 8, 20]
// quickSort(arr)
// console.log(arr, "arr")
console.log(quickSortIgnoreSpace(arr), "quickSortIgnoreSpace(arr)")

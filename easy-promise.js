/*
 * @Description: 简易Promise实现
 * @Author: yxmg
 * @Date: 2021/4/10
 */
const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

class MyPromise {
    status = STATUS.PENDING
    value
    reason

    resolve(value) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.FULFILLED
            this.value = value
        }
    }

    reject(reason) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.REJECTED
            this.reason = reason
        }
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        })
    }

    then(onFulfilled, onRejected) {
        switch (this.status) {
            case STATUS.FULFILLED:
                return new MyPromise(resolve => {
                    this.value = onFulfilled(this.value)
                    resolve(this.value)
                })
            case STATUS.REJECTED:
                return new MyPromise((resolve, reject) => {
                    this.reason = onRejected(this.reason)
                    reject(this.reason)
                })
        }
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    constructor(fn) {
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (e) {
            console.log(e, "e")
            this.reject()
        }
    }
}

// const p = new MyPromise((resolve, reject) => {
//     resolve(1)
//     // reject(2)
// })
const p1 = MyPromise.resolve(1)
const p2 = MyPromise.reject(3)
p1
    .then(value => {
        console.log(value, "value")
        return 2
    })
    .then(value => {
        console.log(value, "value")
    })

p2
    .catch(reason => {
        console.log(reason, "reason")
    })

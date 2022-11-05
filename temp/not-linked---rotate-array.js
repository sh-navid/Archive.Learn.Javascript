Array.prototype.rotateLeft = function (n = 1) {
    n > 1 ? this.rotateLeft(n - 1) : this.push(this.shift())
}

Array.prototype.rotateRight = function (n = 1) {
    n > 1 ? this.rotateRight(n - 1) : this.unshift(this.pop())
}

arr = [3, 4, 5, 6, 7, 8]
console.log(arr)
// [ 3, 4, 5, 6, 7, 8 ]

arr.rotateLeft()
console.log(arr)
// [ 4, 5, 6, 7, 8, 3 ]

arr.rotateRight()
console.log(arr)
//[ 3, 4, 5, 6, 7, 8 ]

arr.rotateRight()
console.log(arr)
//[ 8, 3, 4, 5, 6, 7 ]

//-------------------------------------

arr = [3, 4, 5, 6, 7, 8]
console.log(arr)
// [ 3, 4, 5, 6, 7, 8 ]

arr.rotateRight(3)
console.log(arr)
//[ 6, 7, 8, 3, 4, 5 ]

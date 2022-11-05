arr = [2, 3, 1]

arr.sort((a, b) => a > b ? -1 : 1)
console.log(arr)

arr.sort((a, b) => a < b ? -1 : 1)
console.log(arr)
set = new Set([4, 5, 5, 5, 5, 5, 5, 5, 6])

console.log(set) // No duplicates
console.log(set.size)

set.delete(5)
console.log(set)

set.add(12)
console.log(set, set.has(12))

set.clear()
console.log(set) 
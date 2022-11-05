// We want to create a new functionality
// for all instances of arrays

Array.prototype.double = function () {
    for (x in this) {
        if (typeof this[x] === "number")
            this[x] *= 2;
    }
}

A = [20, 30, 40]
A.double()
console.log(A)
let l = 12
var v = 12
const c = 12
console.log("1>", "l", l, "v", v, "c", c)

{
    let l = 14
    var v = 14
    const c = 14
    console.log("2>", "l", l, "v", v, "c", c)

    {
        let l = 16
        var v = 16
        const c = 16
        console.log("3>", "l", l, "v", v, "c", c)
    }

    console.log("4>", "l", l, "v", v, "c", c)
}

console.log("5>", "l", l, "v", v, "c", c)

// c = 100 // -> TypeError: Assignment to constant variable.
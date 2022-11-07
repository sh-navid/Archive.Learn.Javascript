let P = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 5000)
})


let run = () => {
    P.then((result) => {
        console.log("Run - " + result)
    })
}

let run_async = async () => {
    let result = await P
    console.log("Run async - " + result)
}

run()
run_async()



//----------------------------------------------------------

let M = (n) => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World " + n), 5000)
})

M(2).then((result) => {
    console.log("Promise - " + result)
})
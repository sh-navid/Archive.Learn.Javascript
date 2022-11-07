let run = (n) => {
    console.log("Run Started " + n)
    let i = 0
    while (i++ < 1000000000);
    console.log("Run Ended " + n)
}

let run_async = async (n) => {
    console.log("Run Async Started " + n)
     new Promise(resolve => {
        let i = 0
        while (i++ < 9000000000);
        console.log("Run Async Ended " + n)
    })
    
}

run(1)
run_async(1)
run(2)
run(3)
run(4)




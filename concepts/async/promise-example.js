const myPromise = new Promise((resolve, reject) => {
    if (100 < 10) {
        resolve()
    } else {
        reject()
    }
})

myPromise
    .then(() => {
        console.log("Then Fired")
    }).catch(() => {
        console.log("Catch Fired")
    })
const say = () => {
    console.log("I can say hello")
}


const Talker = (callback) => {
    callback()
}

Talker(say)
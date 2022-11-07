for (let i = 7; i < 10; i++) {
    console.log("A" + i)
}


console.log("--------------------")


for (let i = 1; i < 10; i++) {
    console.log(i++)
    if (i > 4) break
}


console.log("--------------------")


for (let i = 1; i < 10; i++) {
    if (i < 4) continue
    console.log(i++)
}
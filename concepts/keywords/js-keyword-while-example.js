let i = 7
while (i++ < 10) {
    console.log("A" + i)
}

console.log("--------------------")

i = 7
while (++i < 10) {
    console.log("B" + i)
}

console.log("--------------------")

i = 0
while (true) {
    console.log(i++)
    if (i > 4) break
}

console.log("--------------------")

i = 0
while (i++ < 10) {
    if (i < 4) continue
    console.log(i++)
}
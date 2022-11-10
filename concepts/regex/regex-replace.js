text = "Hello to our pretttty prettttttyyyy world"
text = text.replace(/pre[t]+y/, "nice")
console.log(text)



text = "Hello to our pretttty prettttttyyyy world"
text = text.replace(/pre[t]+[y]+/, "nice") // Replace First
console.log(text)



text = "Hello to our pretttty prettttttyyyy world"
text = text.replace(/pre[t]+[y]+/g, "nice") // Replace All
console.log(text)
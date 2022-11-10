text = "Hello to our preTttTy prettttttyYYY world"
text = text.replace(/pre[t]+[y]+/, "nice") // Case sensitivity
console.log(text)
// Hello to our preTttTy niceYYY world


text = "Hello to our preTttTy prettttttyYYY world"
text = text.replace(/pre[t]+[y]+/i, "nice") // Case sensitivity
console.log(text)
// Hello to our nice prettttttyYYY world


text = "Hello to our preTttTy prettttttyYYY world"
text = text.replace(/pre[t]+[y]+/gi, "nice") // Case sensitivity
console.log(text)
// Hello to our nice nice world
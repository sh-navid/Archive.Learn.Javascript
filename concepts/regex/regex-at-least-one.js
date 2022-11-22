s = "6|66|606|6996|60000006"

console.log(s.replace(/6\d+6/g, "+"))
//6|66|+|+|+

console.log(s.replace(/6\d*6/g, "*"))
//6|*|*|*|*

console.log(s.replace(/6\d?6/g, "?"))
//6|?|?|6996|60000006
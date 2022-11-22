s = "1200 years ago"


console.log(s.replace(/\d/, "N"))
//N200 years ago

console.log(s.replace(/\d+/, "N"))
//N years ago

console.log(s.replace(/\d/g, "N"))
//NNNN years ago

console.log(s.replace(/\d+/g, "N"))
//N years ago
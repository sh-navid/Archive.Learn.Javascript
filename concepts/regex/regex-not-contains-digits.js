s = "1200 years ago"


console.log(s.replace(/\D/, "N"))
//1200Nyears ago

console.log(s.replace(/\D+/, "N"))
//1200N

console.log(s.replace(/\D/g, "N"))
//1200NNNNNNNNNN

console.log(s.replace(/\D+/g, "N"))
//1200N
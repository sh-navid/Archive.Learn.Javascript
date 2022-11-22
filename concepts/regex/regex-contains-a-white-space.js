s = "1200   years   ago"


console.log(s.replace(/\s/, "N"))
//1200N  years   ago

console.log(s.replace(/\s+/, "N"))
//1200Nyears   ago

console.log(s.replace(/\s/g, "N"))
//1200NNNyearsNNNago

console.log(s.replace(/\s+/g, "N"))
//1200NyearsNago
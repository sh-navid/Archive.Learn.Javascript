s = "1200   Years ___ Ago   1400"


console.log(s.replace(/^\d+/, "N"))
//N   Years ___ Ago   1400

console.log(s.replace(/\d+$/, "N"))
//1200   Years ___ Ago   N
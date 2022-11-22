s = "1200   Years ___ Ago"


console.log(s.replace(/\w/, "N"))
//N200   Years ___ Ago

console.log(s.replace(/\w+/, "N"))
//N   Years ___ Ago

console.log(s.replace(/\w/g, "N"))
//NNNN   NNNNN NNN NNN

console.log(s.replace(/\w+/g, "N"))
//N   N N N
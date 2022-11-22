s = "1200   years   ago"


console.log(s.replace(/\S/, "N"))
//N200   years   ago

console.log(s.replace(/\S+/, "N"))
//N   years   ago

console.log(s.replace(/\S/g, "N"))
//NNNN   NNNNN   NNN

console.log(s.replace(/\S+/g, "N"))
//N   N   N
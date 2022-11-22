s = "1200   Years ___ Ago"


console.log(s.replace(/\W/, "N"))
//1200N  Years ___ Ago

console.log(s.replace(/\W+/, "N"))
//1200NYears ___ Ago

console.log(s.replace(/\W/g, "N"))
//1200NNNYearsN___NAgo

console.log(s.replace(/\W+/g, "N"))
//1200NYearsN___NAgo
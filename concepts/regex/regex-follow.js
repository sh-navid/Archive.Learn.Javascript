s = "1200 Years Ago; 1400 1401 1402"


console.log(s.replace(/\d+(?=00)/g, "N"))
//N00 Years Ago; N00 1401 1402


console.log(s.replace(/14(?!00)/g, "N"))
//1200 Years Ago; 1400 N01 N02
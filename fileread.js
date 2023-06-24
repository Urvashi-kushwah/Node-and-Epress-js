
// wriring a file

var fs = require('fs')

fs.writeFile('cal1.js',' console.log("MY First js file")',function(err){
    console.log("Data Saved!")
})

//reading a file

var fs = require('fs')

fs.readFile('calc.js','utf8' , function(err , data){
    console.log(data)
})

//

var fs = require('fs')

fs.appendFile('calc.js',' console.log("MY First js file")',function(err){
    console.log("Data Saved!")
})
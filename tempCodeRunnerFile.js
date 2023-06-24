var fs = require('fs')

fs.appendFile('calc.js',' console.log("MY First js file")',function(err){
    console.log("Data Saved!")
})
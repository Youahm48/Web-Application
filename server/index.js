const express = require("express")

const port = process.env.PORT || 3000

const server = express()

server.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})

/*ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/home/runner/Web-Application/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.*/
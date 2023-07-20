const path = require("path")
const express = require("express")

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, "../dist")))

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})
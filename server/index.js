const path = require("path")
const express = require("express")
const Database = require("./Database.js")

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, "../dist")))

//change to database process.env url later
app.get("/database/updatetasks", async function(req, res) {
  //change this later as well
  if(req.headers.userid && req.headers.tasklist && req.headers.authorisation == "Yes") {
    var user = await Database.find(req.headers.userid)
    user.taskList = JSON.parse(req.headers.tasklist)
    await Database.update(req.headers.userid, user)
    res.send("ok")
  }
  else {
    console.log("didn't work")
  }
})

//change to database process.env url
app.get("/database/find", async function(req, res) {
  //change to process.env key
  if(req.headers.userid && req.headers.authorisation == "Yes") {
    res.send(await Database.find(req.headers.userid))
  }
  else {
    res.send("didn't work")
  }
})

app.get("/get", function(req, res) {
  res.send("Get request made")
})

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})
const path = require("path")
const express = require("express")
const Database = require("./Database.js")

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, "../dist")))

app.get("/database/updatetasks", async function(req, res) {
  //change this later
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

app.get("/database/find", async function(req, res) {
  if(req.headers.userid) {
    try {
      res.send(await Database.find(req.headers.userid))
    } catch(err) {
      res.send("User does not exist")
    }
  }
  else {
    res.send("didn't work")
  }
})

app.get("/database/register", async function(req, res) {
  if(req.headers.userid && req.headers.password) {
    Database.define(req.headers.userid, { username: req.headers.userid, password: req.headers.password, taskList: [] })
    res.send("Registered")
  }
})

app.get("/database/login", async function(req, res) {
  if(req.headers.userid && req.headers.password) {
    try {
      const user = await Database.find(req.headers.userid)
      if(req.headers.password == user.password) {
        res.send("Authenticated")
      }
      else {
        res.send("Incorrect username or password")
      }
    } catch(err) {
      res.send("User does not exist")
    }
  }
  else {
    res.send("???")
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
const RDB = require("@replit/database")

const db = new RDB()

var Database = {}

Database.define = async function(keyName, value) {
  const key = await db.get(keyName)
  if(key) {
    throw Error(`Key name [${keyName}] already exists`)
  }
  await db.set(keyName, value)
}

module.exports = Database

/*
const databaseModel = {
  userId: "e",
  password: "r",
  taskList: [],
  //other options
}
*/

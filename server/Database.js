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

Database.update = async function(keyName, value) {
  const key = await db.get(keyName)
  if(!key) {
    throw Error(`Key [${keyName}] does not exist. Define it first`)
  }
  await db.set(keyName, value)
}

Database.delete = async function(keyName) {
  const key = await db.get(keyName)
  if(!key) {
    throw Error(`Key [${keyName}] does not exist.`)
  }
  await db.delete(keyName)
}

Database.find = async function(keyName) {
  const key = await db.get(keyName)
  if(!key) {
    throw Error(`Key [${keyName}] does not exist.`)
  }
  return key
}

module.exports = Database

//function to change only a specific key in the value object of the instance
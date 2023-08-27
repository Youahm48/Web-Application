/*
Test Data
*/

const Database = require("./Database.js")

const userId = "defaultuser"
const databaseModel = {
  username: "defaultuser",
  password: "r",
  taskList: [
    /*{
      deadline: "2023-07-23T03:21:00.000Z",
      id: "Task-Mz9dEvlFitDEJ-eQSv8Lt",
      isComplete: false,
      name: "a",
      priority: "Low",
      subject: "z"
    },
    {
      deadline: "2023-07-22T03:21:00.000Z",
      id: "Task-e2Fss5P8gUVIwuWaO29JZ",
      isComplete: false,
      name: "b",
      priority: "Low",
      subject: "y",
    },
    {
      deadline: "2023-07-24T03:22:00.000Z",
      id: "Task-AYzh-tPvKD3Nzspe33f4b",
      isComplete: false,
      name: "c",
      priority: "Low",
      subject: "x"
    }*/
  ],
}

//Database.define(userId, databaseModel)

Database.update(userId, databaseModel)

Database.find("defaultuser").then((e)=>console.log(e))
const express = require("express")
const controller = require("./controller/controller")
const app = express()

app.set("view engine", "ejs")

app.get("/", controller.root)

app.get("/add-new-capp", controller.form)

app.listen(3000, ()=>{
    console.log("server is listening....")
})
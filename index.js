const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Proton Support")
})

app.listen(3000, () => {
  console.log("Proton Support")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity(`Proton Support`, { type: 'PLAYING'})
})

client.login(process.env.token);

const express = require('express')
const app = express()
const port = 3000
const superagent = require('superagent')

const activities = require('./config.json')

//redirect, Discord replaces query params when activity is started
app.get('/launch/:gid', async function(req, res){
  if(!activities[req.params.gid]){
    return res.status(404).send('Invalid Activity')
  }
  return res.redirect(`${activities[req.params.gid]}`)
})

app.get('*', async function(req, res){
  return res.status(400).send('Not Found')
})

app.listen(port, () => {
  console.log(`Running. Use provided snippet to launch in discord.`)
})

const express = require('express')
const route = express.Router()
const instructors = require('./controllers/instructors')
const members = require('./controllers/members')

route.get('/', function(req, res){
    return res.redirect("/instructors")
})

route.get('/instructors', instructors.index)
route.get('/instructors/create', instructors.create)
route.get('/instructors/:id', instructors.show)
route.get('/instructors/:id/edit', instructors.edit)
route.post("/instructors", instructors.post)
route.put("/instructors", instructors.put)
route.delete("/instructors", instructors.delete)

//MEMBERS

route.get('/members', members.index)
route.get('/members/create',members.create)
route.get('/members/:id', members.show)
route.get('/members/:id/edit', members.edit)
route.post("/members", members.post)
route.put("/members", members.put)
route.delete("/members", members.delete)

module.exports = route

//GET:receber RESOURCE
//POST: criar ou salvar/criar um novo resource
//PUT: Atualizar resourse

const express = require('express')
const route = express.Router()
const instructors = require('./instructors')

route.get('/', function(req, res){
    return res.redirect("/instructors")
})
route.get('/instructors', instructors.index)

route.get('/instructors/create', function(req, res){
    return res.render('instructors/create')
})

route.get('/instructors/:id', instructors.show)

route.get('/instructors/:id/edit', instructors.edit)

route.post("/instructors", instructors.post)

route.put("/instructors", instructors.put)

route.delete("/instructors", instructors.delete)

route.get('/members', function(req, res){
    return res.send("members")
})

module.exports = route

//GET:receber RESOURCE
//POST: criar ou salvar/criar um novo resource
//PUT: Atualizar resourse

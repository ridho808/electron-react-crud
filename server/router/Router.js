const express = require("express");
const { index, AddList, EditList, DeleteList, GetListbyId } = require("../controller");

const Router = express.Router();

Router.get('/list',index);
Router.get('/edit/:id',GetListbyId);
Router.patch('/edit/:id',EditList);
Router.post('/addTodo',AddList);
Router.delete('/delete/:id',DeleteList);

module.exports=Router;

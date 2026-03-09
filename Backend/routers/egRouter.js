const express=require('express');
const { getController, putController, postController, deleteController } = require('../controllers/egController');

const egRouters =express.Router();
egRouters.get('/',getController)
egRouters.get('/',postController)
egRouters.get('/',putController)
egRouters.get('/',deleteController)

module.exports=egRouters;
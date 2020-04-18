const controller = require('./controller.js');
const router = require('express').Router();

router
.route('/')  // this is at endpoint /api/
.get(controller.get)
.post(controller.post)

router
.route('/:index')  // this is the req.params value from .delete
.delete(controller.delete)

module.exports = router

const express = require('express')

const router = express.Router()

const controller =   require('../controller/user.controller');

router.get('/:id', controller.findById);

router.post('/name', controller.findByName);

router.get('/', controller.findAll);

router.post('/', controller.create);

router.patch('/', controller.update);

router.delete('/:id', controller.delete);

module.exports = router
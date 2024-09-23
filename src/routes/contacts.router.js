/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const contactsController = require('../controllers/contacts.controller');
const { methodNotAllowed } = require('../controllers/erros.controller');

const router = express.Router();

// eslint-disable-next-line no-undef
module.exports.setup = (app) => {
    app.use('/api/v1/contacts', router);
    
    router.get('/', contactsController.getContactsByFilter);
    router.post('/', contactsController.createContact);
    router.delete('/', contactsController.deleteAllContacts);
    router.all('/', methodNotAllowed);

    router.get('/:id', contactsController.getContact);
    router.put('/:id', contactsController.updateContact);
    router.delete('/:id', contactsController.deleteContact);
    router.all('/:id', methodNotAllowed);
};
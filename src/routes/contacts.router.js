// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const contactsController = require('../controllers/contacts.controller');

const router = express.Router();

// eslint-disable-next-line no-undef
module.exports.setup = (app) => {
    app.use('/api/v1/contacts', router);
    
    router.get('/', contactsController.getContactsByFilter);
    router.post('/', contactsController.createContact);
    router.delete('/', contactsController.deleteAllContacts);
    
    router.get('/:id', contactsController.getContact);
    router.put('/:id', contactsController.updateContact);
    router.delete('/:id', contactsController.deleteContact);
};
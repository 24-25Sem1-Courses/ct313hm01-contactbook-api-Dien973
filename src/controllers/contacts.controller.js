/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const JSend = require('../jsend');

function createContact(req, res) {
    return res.status(201).json({ contact: {} });
}

function getContactsByFilter(req, res) {
    const filters = [];
    const { favorite, name } = req.query;

    if (favorite !== undefined) {
        filters.push(`favorite=${favorite}`);
    }
    if (name) {
        filters.push(`name=${name}`);
    }

    console.log(filters.join('&'));
    
    return res.json({ contacts: [] });
}

function getContact(req, res) {
    return res.json({ contact: {} });
}

function updateContact(req, res) {
    return res.json({ contact: {} });
}

function deleteContact(req, res) {
    return res.json({
    message: 'Contact deleted',
    });
}

function deleteAllContacts(req, res) {
    return res.json({
    message: 'All contacts deleted',
});
}

module.exports = {
    getContactsByFilter,
    deleteAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
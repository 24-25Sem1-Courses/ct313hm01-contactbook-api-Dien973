/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const contactsService = require('../services/contacts.service');
const ApiError = require('../api-error');
const JSend = require('../jsend');

async function createContact(req, res, next){
    if (!req.body?.name || typeof req.body.name !== 'string') {
        return next(new ApiError(400, 'Name should be a non-empty string'));
    }

    try {
        const contact = await contactsService.createContact({
            ...req.body,
            avatar: req.file ? `/public/uploads/${req.file.filename}` : null,
        });
        return res
            .status(201)
            .set({
                Location: `${req.baseUrl}/${contact.id}`,
            })
            .json(
                JSend.success({
                    contact,
                })
            );
    } catch (error) {
        console.log(error);
        return next(
                new ApiError(500, 'An error occurred while creating the contact')
        );
    }
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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const knex = require('../database/knex');

function contactRepository() {
    return knex('contacts');
}

function readContact(payload) {
    return {
        name: payload.name,
        email: payload.email,
        address: payload.address,
        phone: payload.phone,
        favorite: payload.favorite,
        avatar: payload.avatar,
    };
}

// Define functions for accessing the database

async function createContact(payload) {
    const contact = readContact(payload);
    const [id] = await contactRepository().insert(contact);
    return { id, ...contact };
}
module.exports = {
    // Export defined functions
    createContact
}
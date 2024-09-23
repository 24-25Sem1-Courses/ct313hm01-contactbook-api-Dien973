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

    /**
     * @swagger
     * /api/v1/contacts:
     * get:
     *  summary: Get contacts by filter
     *  description: Get contacts by filter
     *  parameters:
     *      - in: query
     *        name: favorite
     *        schema:
     *          type: string
     *        description: Filter by contact name
     *  tags:
     *      - contacts
     *  responeses:
     *      200:
     *          description: A list of contacts
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          status:
     *                              type: string
     *                              description: the response status
     *                              enum: [success]
     *                          data:
     *                              type: object
     *                              properties:
     *                                  contacts:
     *                                      type: array
     *                                      items:
     *                                          $ref: '#/components/chemas/contact'
     */


    router.get('/', contactsController.getContactsByFilter);

    /**
     * @swagger
     * /api/v1/contacts:
     * post:
     *  summary: Create a new contacts
     *  description: Create a new contacts
     *  requestBody:
     *      required: true
     *      content:
     *          multipart/form-data:
     *              schema:
     *                  $ref: '#/components/schemas/Contact'
     *  tags:
     *      - contacts
     *  responeses:
     *      201:
     *          description: A new contacts
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          status:
     *                              type: string
     *                              description: the response status
     *                              enum: [success]
     *                          data:
     *                              type: object
     *                              properties:
     *                                  contacts:
     *                                      $ref: '#/components/chemas/contact'
     */
    router.post('/', contactsController.createContact);

    /**
     * @swagger
     *  /api/v1/contacts:
     *      delete:
     *          summary: Delete all contacts
     *          description: Delete all contacts
     *          tags:
     *              - contacts
     *          responses:
     *              200:
     *                  description: All contacts deleted
     *                  $ref: '#/components/responses/200NoData
     */
    router.delete('/', contactsController.deleteAllContacts);
    router.all('/', methodNotAllowed);

    /**
     * @swagger
     * /api/v1/contacts/{id}:
     *  get:
     *      summary: Get contact by ID
     *      description: Get contact by ID
     *      parameters:
     *          - $ref: '#/components/parameters/contactIdParam'
     *      tags:
     *          - contacts
     *      responses:
     *          200:
     *              description: A contact
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              status:
     *                                  type: string
     *                                  discription: The response status
     *                                  enum: [success]
     *                              data:
     *                                  type: object
     *                                  properties:
     *                                      contact:
     *                                          $ref: '#/components/schemas/Contact'
     */
    router.get('/:id', contactsController.getContact);
    
    /**
     * @swagger
     * /api/v1/contacts/{id}:
     *  put:
     *      summary: Update contact by ID
     *      description: Update contact by ID
     *      parameters:
     *          - $ref: '#/components/parameters/contactIdParam'
     *      requestBody:
     *          required: true
     *          content:
     *              multipart/form-data:
     *                  schema:
     *                      $ref: '#/components/schemas/Contact'
     *       tags:
     *          - contacts
     *      responses:
     *          200:
     *              description: An updated contact
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              status:
     *                                  type: string
     *                                  discription: The response status
     *                                  enum: [success]
     *                              data:
     *                                  type: object
     *                                  properties:
     *                                      contact:
     *                                          $ref: '#/components/schemas/Contact'
     */
    router.put('/:id', contactsController.updateContact);
    
    /**
     * @swagger
     *  /api/v1/contacts/{id}:
     *      delete:
     *          summary: Delete contacts by ID
     *          description: Delete contacts by ID
     *          parameters:
     *              - $ref: '#/components/parameters/contactIdParam'
     *          tags:
     *              - contacts
     *          responses:
     *              200:
     *                  description: Contacts deleted
     *                  $ref: '#/components/responses/200NoData
     */
    router.delete('/:id', contactsController.deleteContact);
    router.all('/:id', methodNotAllowed);
};
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const cors = require('cors');

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-require-imports, no-undef
const JSend = require('./jsend');
// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const contactsRouter = require('./routes/contacts.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    return res.json(JSend.success())
});

contactsRouter.setup(app);

// eslint-disable-next-line no-undef
module.exports = app;
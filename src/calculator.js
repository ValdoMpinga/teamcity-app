// calculator.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/add', (req, res) =>
{
    const { a, b } = req.body;
    const result = a + b;
    res.json({ result });
});

app.post('/subtract', (req, res) =>
{
    const { a, b } = req.body;
    const result = a - b;
    res.json({ result });
});

app.post('/multiply', (req, res) =>
{
    const { a, b } = req.body;
    const result = a * b;
    res.json({ result });
});

app.post('/divide', (req, res) =>
{
    const { a, b } = req.body;
    try
    {
        if (b === 0)
        {
            throw new Error("Cannot divide by zero");
        }
        const result = a / b;
        res.json({ result });
    } catch (error)
    {
        res.status(400).json({ error: error.message });
    }
});
module.exports = app;

// server.js

// Import modules:(path) & framework: (express) & middleware: (cors)
const express = require('express'); //for making server with node.js easy
const path = require('path') // for working with file directory
const cors = require('cors')
const { Pool } = require('pg');
const { hostname } = require('os');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configuring postgreSQL client Pool
const pool = new Pool({ // Change the configuration later with the needed one.
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,
});

// RESTful API Routes
// Get all todos
app.get('/api/todos', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC'); //for now create a table todo
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Post a new todo
app.get('/api/todos', async (req, res) => {
    const { task } = req.body
    try{
        const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]); // The Attribute name should be correct
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creating todos:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT (Update a todos completed status)
app.put('/api/todos/:id', async(req, res) => {
    const todoId = req.params.id;
    const { completed } = req.body;
    try {
        const result = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *', [completed, todoId]); // Create attribute 'completed'!
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error updating todo:', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is listening on http://localhost:${PORT}');
});

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // JSON support

// Default route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Sample API routes
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

app.get('/posts/trending', (req, res) => {
    res.json([
        { id: 101, content: 'This is a trending post!' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


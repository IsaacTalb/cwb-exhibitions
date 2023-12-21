const express = require('express');
const app = express();
const port = 3000;

// Sample data for products, articles, and stories
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
];

const articles = [
    { id: 1, title: 'Article 1', content: 'Lorem ...' },
    { id: 2, title: 'Article 2', content: 'Lorem...' },
    // Add more articles as needed
];

const stories = [
    { id: 1, title: 'Story 1', content: 'Lorem...' },
    { id: 2, title: 'Story 2', content: 'Lorem ...' },
    // Add more stories as needed
];

const companyHistory = 'CWB - Community Work Without Borders was founded in...';

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/articles', (req, res) => {
    res.json(articles);
});

app.get('/api/stories', (req, res) => {
    res.json(stories);
});

app.get('/api/history', (req, res) => {
    res.send(companyHistory);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

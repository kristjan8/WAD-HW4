const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Get all posts from the database
app.get('/api/posts', async(req, res) => {
    try {
        console.log("Get all posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posts"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a post with specified id from the database
app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("Get a post with id request has arrived");
        const { id } = req.params;
        const posts = await pool.query( 
            "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Add post
app.post('/api/posts', async(req, res) => {
    try {
        console.log("An add post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts(body, username, datetime) values ($1, $2, $3) RETURNING *", [post.body, post.username, post.datetime]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

// Update a post
app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("Update post request has arrived");
        const updatepost = await pool.query(
            "UPDATE posts SET (body, username, datetime) = ($2, $3, $4) WHERE id = $1", [id, post.body, post.username, post.datetime]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});
 
// Delete all posts
app.delete('/api/posts', async(req, res) => {
    try {
        console.log("Delete all posts request has arrived");
        const deleteall = await pool.query(
            "DELETE FROM posts"
        );
        res.json(deleteall);
    } catch (err) {
        console.error(err.message);
    }
}); 

// Delete a post with specified id
app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("Delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});
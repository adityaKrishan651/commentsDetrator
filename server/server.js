const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const db = require("./database");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" }});

app.use(cors());
app.use(express.json());


app.post('/api/login', (req, res) => {
    const { username } = req.body;
    const sessionId = `session-${Math.random().toString(36).substr(2, 9)}`;
    res.json({ sessionId, username });
});

app.get('/api/comments', (req, res) => {
    db.all('SELECT * FROM comments ORDER BY timestamp DESC', (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

app.post('/api/comments', (req, res) => {
    const { username, comment } = req.body;
    const query = 'INSERT INTO comments (username, comment) VALUES (?, ?)';
    db.run(query, [username, comment], (err) => {
        if (err) throw err;
        const newComment = {id: this.lastId, username, comment, timestamp: new Date() };

        io.emit('new-comment', newComment);
        res.json(newComment);
    })
});


io.on('connection', (socket) => {
    console.log('New Client Connected');
    socket.on('disconnect', () => console.log("Client DIsconnected"));
})

const PORT = 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


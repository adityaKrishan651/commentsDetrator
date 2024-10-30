'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, List, ListItem, ListItemText, Container } from '@mui/material';
import axios from 'axios';
import io from 'socket.io-client';

let socket;

export default function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('username') === null ) {
      router.push('/login');
    }
    socket = io('http://localhost:5001');

    // Fetch initial comments
    axios.get('http://localhost:5001/api/comments').then((response) => setComments(response.data));

    // Listen for new comments
    socket.on('new-comment', (newComment) => {
      setComments((prevComments) => [newComment, ...prevComments]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCommentSubmit = async () => {
    const username = localStorage.getItem('username');
    await axios.post('http://localhost:5001/api/comments', { username, comment });
    setComment('');
  };

  return (
    <Container>
      <h1>Comments</h1>
      <TextField
        label="Add a comment"
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
      />
      <Button onClick={handleCommentSubmit} variant="contained" style={{ marginTop: '1rem' }}>
        Post Comment
      </Button>
      <List style={{ marginTop: '2rem' }}>
        {comments.map((c) => (
          <ListItem key={c.id}>
            <ListItemText primary={`${c.username}: ${c.comment}`} secondary={new Date(c.timestamp).toLocaleString()} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

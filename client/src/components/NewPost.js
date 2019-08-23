import React, { useState } from 'react';
import { Box, Container, TextField, Button } from '@material-ui/core';
import { Post } from '../Api/Post';

const NewPost = ({ newPostSubmitted, loading }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [tags, setTags] = useState('');

  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [postError, setPostError] = useState(false);

  const checkInputs = () => {
    if (name.length < 1) {
      setNameError(true);
    }
    if (title.length < 1) {
      return setTitleError(true);
    }
    if (post.length < 2) {
      return setPostError(true);
    }

    submitPost();
  };
  const submitPost = () => {
    loading();
    try {
      Post.submitNewPost({
        author: name,
        title,
        post,
        tags,
        createdAt: new Date(Date.now()).toLocaleString(),
        upvote: 0,
        downvote: 0,
      }).then(newPostSubmitted());
    } catch (error) {
      console.log(error);
    }
  };
  const handleTags = e => {
    const tagsValue = e.trim().split(',');
    setTags(tagsValue);
  };
  return (
    <React.Fragment>
      <Container>
        <Box
          border={2}
          borderRadius={10}
          borderColor="teal"
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField // author name
            onChange={e => {
              setName(e.target.value);
              setNameError(false);
            }}
            required={nameError}
            label={nameError ? 'Required' : null}
            style={{ margin: 8 }}
            placeholder="Your name"
            fullWidth
            margin="normal"
            error={nameError}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField // post title
            onChange={e => {
              setTitle(e.target.value);
              setTitleError(false);
            }}
            label={titleError ? 'Required' : null}
            required={titleError}
            style={{ margin: 8 }}
            placeholder="Post title"
            fullWidth
            error={titleError}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField // post message
            onChange={e => {
              setPost(e.target.value);
              setPostError(false);
            }}
            style={{ margin: 8 }}
            error={postError}
            placeholder="Your message"
            fullWidth
            multiline
            rows={5}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-full-width"
            // label="Post Title"
            style={{ margin: 8 }}
            placeholder="Tags, seperate by comma"
            fullWidth
            onChange={e => handleTags(e.target.value)}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            onClick={checkInputs}
            color="primary"
            style={{ display: 'flex', alignSelf: 'flex-end' }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default NewPost;

import React, { useState } from 'react';
import { Box, Container, TextField, Button } from '@material-ui/core';

const NewPost = () => {
  const [tags, setTags] = useState([]);
  const handleTags = e => {
    const tagsValue = e.trim().split(',');
    setTags(tagsValue);
    console.log(tags);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          border={1}
          borderColor="grey.500"
          style={{
            padding: 30,
            display: 'flex',

            flexDirection: 'column',
          }}
        >
          <TextField
            id="outlined-full-width"
            label="You name"
            style={{ margin: 8 }}
            placeholder="Your name"
            // fullWidth
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
            placeholder="Post title"
            fullWidth
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

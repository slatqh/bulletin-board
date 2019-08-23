import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Grid,
  Button,
  CircularProgress as Spiner,
} from '@material-ui/core/';
import Message from './components/Message';
import { NavBar } from './components/NavBar';

import NewPost from './components/NewPost';
import { Post } from './Api/Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, toggleNewPost] = useState(false);
  const [post, postSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Post.fetchAllposts().then(({ data }) => setPosts(data), setLoading(false));
  }, [post, posts.length]);

  const PostSubmitted = () => {
    console.log('new post submited');
    postSubmitted();
    setLoading(false);
    toggleNewPost(!toggle);
  };
  const deletePost = id => {
    const updatePosts = posts.filter(el => el._id !== id);
    setPosts(updatePosts);
    setLoading(true);
    try {
      Post.deletePost(id)
        .then(alert('Post deleted'))
        .then(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
  const filterByDate = () => {
    console.log('By Date');
  };
  const filterByVotes = () => {
    console.log('By Votes');
  };
  const filterByTags = () => {
    console.log('By Tags');
  };

  return (
    <>
      <NavBar
        byDates={filterByDate}
        byVotes={filterByVotes}
        byTags={filterByTags}
      />
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ marginBottom: 20 }}
        >
          {loading ? <Spiner size={30} style={{}} /> : null}
        </Grid>
        {posts.length !== 0 ? (
          posts.map(el => (
            <Message data={el} key={el._id} deletePost={id => deletePost(id)} />
          ))
        ) : (
          <div style={styles.noPosts}>No posts. Create one!</div>
        )}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="flex-end"
          justify="center"
          // style={{ marginBottom: 20 }}
        >
          <Button
            onClick={() => toggleNewPost(!toggle)}
            color={toggle ? 'secondary' : 'primary'}
            variant="outlined"
            style={{ margin: 20 }}
          >
            {toggle ? 'Cancel' : 'New'}
          </Button>
          {toggle ? (
            <NewPost
              newPostSubmitted={PostSubmitted}
              loading={() => setLoading(true)}
            />
          ) : (
            <div />
          )}
        </Grid>
      </Container>
    </>
  );
};
const styles = {
  noPosts: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
  },
};
export default App;

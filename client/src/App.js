import React, { useEffect, useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Message from './components/Message';
import AppBar from './components/NavBar';
import NewPost from './components/NewPost';
import { Post } from './Api/Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Post.fetchAllposts().then(({ data }) => setPosts(data));
  }, []);
  return (
    <>
      <div className="App">
        <AppBar />
        <Container maxWidth="lg" style={{ marginTop: 30 }}>
          {/* {posts.length > 0 ? (
            posts.map(el => <Message data={el} key={el._id} />)
          ) : (
            <div>Loading....</div>
          )} */}
          {/* <Button>Add new</Button> */}
          <NewPost />
        </Container>
      </div>
    </>
  );
};

export default App;

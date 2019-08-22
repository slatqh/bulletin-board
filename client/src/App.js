import React, { useEffect, useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Message from './components/Message';
import AppBar from './components/NavBar';
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
          {posts.length > 0 ? (
            posts.map(el => <Message data={el} key={el._id} />)
          ) : (
            <div>Loading....</div>
          )}
        </Container>
      </div>
    </>
  );
};

export default App;

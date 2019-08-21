import React, { Fragment} from 'react';
import './App.css'
import Message from './components/Message'
import List from './components/List'
import Container from '@material-ui/core/Container';
import AppBar from './components/NavBar'


function App() {
  return (
    <>
    <div className='App'>
      <AppBar />
      <Container maxWidth='lg' style={{ marginTop: 30}}>
        <Message />

      </Container>
      {/* <List /> */}
    </div>
    </>
  );
}

export default App;

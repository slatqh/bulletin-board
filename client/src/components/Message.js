import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Post } from '../Api/Post';

const Message = ({ data }) => {
  const { title, author, post, upvote, downvote, _id } = data;
  console.log(data);

  const [postTitle, setTitle] = useState(title);
  const [edit, setEditMode] = useState(false);
  const [postText, setPost] = useState(post);

  // actions
  const deletePost = () => {
    console.log(_id);
    try {
      Post.deletePost(_id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = () => {
    setEditMode(!edit);
  };
  const voteUp = () => {
    console.log('vote Up');
  };
  const voteDown = () => {
    console.log('Vote down');
  };

  return (
    <div style={styles.container}>
      <div style={{ flex: 1, padding: 10 }}>
        <div style={{ display: 'flex' }}>
          <h4 style={{ color: 'linen', flex: 1 }}>Author: {author}</h4>
          <p style={{ alignItems: 'flex-end', color: 'white' }}>
            Created at 12.14.2019
          </p>
        </div>
        {edit ? (
          <>
            <input
              type="text"
              value={postTitle}
              multiple
              onChange={e => setTitle(e.target.value)}
              style={styles.titleInput}
            />
            <textarea
              type="text"
              value={postText}
              onChange={e => setPost(e.target.value)}
              style={styles.textInput}
            />
          </>
        ) : (
          <>
            <p style={{ color: 'linen' }}>{postTitle}</p>
            <p
              style={{
                backgroundColor: 'honeydew',
                padding: 15,
                borderRadius: 10,
                borderWidth: 1,
              }}
            >
              {postText}
            </p>
          </>
        )}
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={styles.voteButtons}>
          <Button
            style={{ marginRight: 5, backgroundColor: 'darkturquoise' }}
            variant="outlined"
            onClick={voteUp}
          >
            UP {upvote || 0}
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            onClick={voteDown}
          >
            DOWN {downvote || 0}
          </Button>
        </div>
        <div style={styles.buttons}>
          <Button
            style={{ marginRight: 5 }}
            variant="contained"
            color="default"
            onClick={handleEdit}
          >
            {edit ? 'Save' : 'Edit'}
          </Button>
          <Button variant="contained" color="secondary" onClick={deletePost}>
            DELETE
            <DeleteIcon style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
      >
        <span style={{ color: 'white', fontSize: 18, padding: 15 }}>
          Tags :{' '}
        </span>
        <div style={{ color: 'antiquewhite' }}>Color, Text, Input</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginBottom: 15,
    flexDirection: 'column',
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  buttons: {
    margin: 15,
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
  },
  voteButtons: {
    margin: 15,
    flex: 1,
    alignSelf: 'flex-start',
  },
  titleInput: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'teal',
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
};
export default Message;

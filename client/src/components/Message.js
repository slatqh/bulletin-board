import React, { useState } from 'react';
import { Button, CircularProgress as Spiner } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { styles } from './MessageStyles';
import { Post } from '../Api/Post';

const Message = ({ data, deletePost }) => {
  const { title, author, post, upvote, downvote, _id, tags } = data;
  const [postTitle, setTitle] = useState(title);
  const [edit, setEditMode] = useState(false);
  const [postText, setPost] = useState(post);
  const [up, setVoteUp] = useState(upvote);
  const [loading, setLoading] = useState(false);
  const [down, setvoteDown] = useState(downvote);

  // actions

  const handleEdit = () => {
    setEditMode(!edit);
    if (post === postText && postTitle === title) {
      return;
    }
    try {
      Post.editPost({ id: _id, title: postTitle, post: postText });
    } catch (error) {
      console.log(error);
    }
  };

  const updateVote = async name => {
    if (name === 'upvote') {
      setVoteUp(up + 1);
      setLoading(true);
      try {
        const { success } = await Post.updateVotes({ like: name, id: _id });
        if (success) {
          setLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      setvoteDown(down + 1);
      try {
        const { success } = Post.updateVotes({ like: name, id: _id });
        if (success) {
          setLoading(false);
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ flex: 1, padding: 10 }}>
        <div style={{ display: 'flex' }}>
          <h4 style={styles.author}>Author: {author}</h4>
          <p style={{ alignItems: 'flex-end', color: 'white' }}>
            Date :{' '}
            {data.createdAt ? data.createdAt.split(',', 1).toString() : ''}
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
            <p style={styles.textarea}>{postText}</p>
          </>
        )}
      </div>
      <div // bottom button's
        style={styles.buttonsContainer}
      >
        <div style={styles.voteButtons}>
          <Button
            style={{ marginRight: 5, backgroundColor: 'darkturquoise' }}
            variant="outlined"
            onClick={() => updateVote('upvote')}
          >
            UP {loading ? <Spiner size={20} /> : up || 0}
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            onClick={() => updateVote('downvote')}
          >
            DOWN - {loading ? <Spiner size={20} /> : down || 0}
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletePost(data._id)}
          >
            DELETE
            <DeleteIcon style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
      <div style={styles.TagsContainer}>
        <span style={{ color: 'white', fontSize: 16, padding: 15 }}>
          tags :{' '}
        </span>
        <div style={styles.tags}>
          {tags.map((el, i) => (
            <div key={i} style={{ paddingRight: 10 }}>
              {`${el}#`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;

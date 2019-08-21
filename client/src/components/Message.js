import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const value  = `
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
Some text Some text
`
const postTitle = `Some Title`

const Message = () => {
    const [title, setTitle ] = useState(postTitle)
    const [edit, setEditMode] = useState(false)
    const [post, setPost] = useState(value)
    const handleEdit = () =>{
        setEditMode(!edit)
    }
    const voteUp = () => {
        console.log('vote Up')
    }
    const voteDown = () => {
        console.log('Vote down')
    }

    return (
        <div style={styles.container}>
            <div style={{ flex: 1,  padding: 10}}>
                <div style={{ display: 'flex'}}>
                    <h4 style={{ color: 'linen', flex: 1}}>Author: Dimon</h4>
                    <p style={{  alignItems: 'flex-end', color: 'white'}}>Created at 12.14.2019</p>
                </div>
                {
                    edit?
                    <>
                        <input
                            type='text'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            style={{ width: '100%', marginBottom: 10, flex: 1, borderRadius: 5, borderColor: 'teal', height: 30}}
                            />
                        <input
                            type='textarea'
                            value={post}
                            onChange={e => setPost(e.target.value)}
                            style={{ width: '100%', flex: 1, padding: 10, padding: 15, borderRadius: 10, borderWidth: 1}}
                            />
                    </> :
                    <>
                    <p style={{ color: 'linen'}}>{title}</p>
                    <p style={{backgroundColor: 'honeydew', padding: 15, borderRadius: 10, borderWidth: 1}}>
                   {post}
                </p>
                </>
                }
            </div>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={styles.voteButtons}>
                    <Button style={{ marginRight: 5, backgroundColor: 'darkturquoise'}}
                        variant="outlined"
                        onClick={voteUp}>UP {10}</Button>
                    <Button
                        variant="outlined"
                        style={{ backgroundColor: 'white'}}
                        onClick={voteDown}
                         >DOWN
                    </Button>
                </div>
                <div style={styles.buttons}>
                    <Button style={{ marginRight: 5, }}
                        variant="contained"
                        color='default'
                        onClick={handleEdit}>Edit</Button>
                    <Button variant="contained" color="secondary" type='submit'>
                        DELETE
                        <DeleteIcon style={{ marginLeft: 5}}/>
                    </Button>
                </div>

            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
         flex: 1,
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
        alignSelf: 'flex-start'
    }
}
export default Message;


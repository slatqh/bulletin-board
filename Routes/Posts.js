const router = require('express').Router();
const Post = require('../Models/Posts');

router.get('/posts', (req, res) => {
  Post.find({}, function(err, post){
    if(err){
      console.log(err)
    }
    res.send({data: post})
  }).catch(err => console.log(err))
})
router.post('/posts', (req,res) => {
  const { title, author, post, upvote, downvote } = req.body
  const newPost = new Post({title, author, post, upvote, downvote})
  newPost.save().then(
    item => {
      res.send({data: {
        id: item._id,
        title: item.title,
        post: item.post,
        author: item.author,
        upvote: item.upvote,
        downvote: item.downvote}
      })
    }
  ).catch(err => {
    res.status(400).send('Unable to save post')
  })
})
router.post('/edit', (req, res) => {
  const { post, id } = req.body
  Post.findOneAndUpdate({_id: id}, { $set: { post: post}}).then(
    post => {
      res.sendStatus(200).send('Post updated')
    }
  ).catch(err => console.log(err))

})
router.post('/votes', (req, res) => {
  const { id, like } = req.body
  console.log('FROM VOTE ROUTE', like)
  if(like === 'upvote'){
    Post.findOneAndUpdate({_id: id}, { $inc: { upvote: + 1 }}).then(post =>{
        res.send(post)
    }
    ).catch(err => console.log(err))
  }
  else if(like === 'downvote'){
    Post.findOneAndUpdate({_id: id}, { $inc: { downvote: + 1 }}).then(
      post => {
        res.send(post)
      }
    ).catch(err => console.log(err))
  }

})

router.post('/delete', (req, res) => {
  const { id } = req.body
  Post.deleteOne({ _id: id}, function(err){
    if(err){
      console.log("Can't delete", err)
    }
    res.send('Delete success')
  })
})


module.exports = router;
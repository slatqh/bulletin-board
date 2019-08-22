const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const post = new Schema({
  id: Number,
  title: String,
  author: String,
  post: String,
  upvote: Number,
  downvote: Number,
  createdAt: String,
  tags: Array
})

module.exports = mongoose.model('Post', post)
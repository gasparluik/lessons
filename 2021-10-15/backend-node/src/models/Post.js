const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  content: { type: String, required: true },
  user: { type: String, required: false },
  unused: { type: Boolean, default: true },
  color: { type: String, enum: ['red', 'green', 'blue'], default: 'green' },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post
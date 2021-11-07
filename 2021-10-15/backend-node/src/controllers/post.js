const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const Posts = await Post.find({})
  
  res.status(200).send(Posts)
}

exports.createPost = async (req, res) => {

  try {
  
    //Saaks info kätte req.body -st
    const {
      content,
      user,
      unused,
      color,
    } = req.body

    const newPost = new Post({
      content,
      user,
      unused,
      color,
    })


    const savedPost = await newPost.save()
    if (!savedPost) throw Error("Error creating post")

    res.status(200).json("Post saved successfully")
  } catch (e){
    res.status(400).json({ error: e.message})
  }
}

exports.updatePost = async (req, res) => {

  const { content } = req.params;

  const Post = await Post.findOneAndUpdate({ _content: content });

  if (!Post) {
    res.status(404).send("No Post with that id found")
  } else {

    Post.content++; //comment

    const savedPost = await Post.save();

    res.status(200).send(`Post's content successfully updated: \n ${Post}`);
  }
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const Post = await Post.findOneAndDelete({ _id: id })

  if (!Post) res.status(404).send("No Post with that id found")

  res.status(200).send(`Successfully deleted the following Post: \n ${Post}`)
}
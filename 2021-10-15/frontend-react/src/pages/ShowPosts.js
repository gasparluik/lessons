import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../store";
import { Form, Button} from "antd"
import { addPost, removePost, updatePosts, getPosts } from "../store/actions";

function ShowPosts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);


  const displayPosts = () => {

}


  //võite panna eraldi nupu, et get latest from database (sync)
  const handleFetch = async (e) => {

    const post = {
        title: '',
        body: '',
        posts: []
    }

    const res = await fetch("http//localhost:8081/api/post/fetch")
    .then((res) => {
        const data = res.data;
        this.setState({ posts: data})
        console.log("data fetched")
    }).catch(() => {
        console.log("Error with somehting")
    })


    if (res) {
      console.log("Successfully fetched posts");
    }

  }

  return (
    <div>
      <h1>Posts</h1>
      <Form>
      <Button onClick={handleFetch}>Fetch</Button>
      </Form>
    </div>
  );
}

export default ShowPosts;

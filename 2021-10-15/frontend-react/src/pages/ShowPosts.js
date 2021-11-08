import { useState, useEffect } from "react";
import { Form, Button } from "antd";

function ShowPosts() {
  const [posts, setPosts] = useState("");

  //võite panna eraldi nupu, et get latest from database (sync)
  const handleFetch = async () => {
    //fetchimise erinevad olekud
    try {
      const url = "http://localhost:8081/api/post/fetch";
      const response = await fetch(url);
      const data = await response.json();
      setPosts({posts : data})
      if (response.ok) {
        console.log("Successfully fetched posts");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const displayPosts = (posts) => {
    return (
      <div className="posts">
        {posts.map((element, index) => (
          <li>
            {element.id} {element.content}
          </li>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <Button onClick={handleFetch}>Fetch</Button>
    </div>
  );
}

export default ShowPosts;

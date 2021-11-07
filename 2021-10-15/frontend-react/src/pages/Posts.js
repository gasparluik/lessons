import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

function Posts() {


  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  //Ilma dependency massiivita ehk ilama [] kutsub välja igal renderdusel
  //tühja massiivi dependencyna esimest korda
  //saab ka kutsuta teatud state 

  //võite panna eraldi nupu, et get latest from database (sync)



  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    addNewPost();

    if (inputRef.current) inputRef.current.focus();
  };

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
    };
    //salvestame andmebaasi ja kui on edukas,
    //siis teeme dispatchi ja uuendame state lokaalselt.

    dispatch(addPost(newPost));

  };

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit" useState>
          Submit
        </button>
      </form>

      

      {state.posts.data.map((element, index) => (
        <li>
          {element.id} {element.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(element.id))}
          >
            &#128540;
          </span>
        </li>
      ))}
    </div>
  );
}

export default Posts;

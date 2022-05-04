import { useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CreatePost = () => {
  let navigate = useNavigate();
  const [titleText, setTitleText] = useState("");
  const [postText, setPostText] = useState("");
  const handleInputChange = (event) => {
    setTitleText(event.target.value);
  };
  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // create a reference to our database
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    // push the values of the state to the database
    push(dbRef, { titleText, postText });
    // reset the state to an empty string
    setTitleText("");
    setPostText("");
    navigate("/");
  };

  return (
    <div className="form">
      <form action="submit">
        <label htmlFor="newBook">Add a new title</label>
        <input
          type="text"
          id="newBook"
          onChange={handleInputChange}
          value={titleText}
        />
        <label htmlFor="newBook">Post</label>
        <textarea
          id="post"
          name="Post"
          rows="20"
          cols="20"
          onChange={handlePostChange}
          value={postText}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;

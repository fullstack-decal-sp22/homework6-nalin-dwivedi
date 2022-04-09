import { useState } from "react";
import axios from "axios";

const NewPost = (props) => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    axios
      .post("http://localhost:3002/post", {
        "id": id,
        "title": title,
        "body": body
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setID(e.target.value)}/>
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)}/>
    </div>
    <button style={{ marginTop: '4px'}} onClick={() => {
      onSubmit();
      props.onClick();
    }}>
      Submit
    </button>
  </div>
}

export default NewPost;

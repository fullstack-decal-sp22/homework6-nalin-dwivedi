import { useState } from "react";
import axios from "axios";

const NewComment = (props) => {
    const [comment, setComment] = useState("");

    const onSubmit = () => {
        axios
            .post(`http://localhost:3002/post/${props.id}/comment`, {
                "newComment" : comment
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <div>
                <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
            <button style={{marginTop: '4px'}} onClick={() => {
                onSubmit(comment);
                props.onClick();
            }}>
                Submit
            </button>
        </div>
    )
};

export default NewComment;
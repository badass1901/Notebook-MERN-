import React, { useContext, useState } from "react";
import "../style/Form.scss";
import NoteContext from "../context/notes/NoteContext";


const Form2 = () => {
    const context = useContext(NoteContext);
  const { addNote } = context;
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("")
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, tag, description);
        addNote(title,description , tag);
    }

  return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control mt-4 mb-3" />
                    <input placeholder="Tag" onChange={(e) => setTag(e.target.value)} value={tag} className="form-control mb-3" />
                    <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control mb-3" />
                    <button className="btn btn-block btn-primary">Submit</button>
                </div>
            </div>
        </form>
    
  )
}

export default Form2
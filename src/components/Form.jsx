import React, { useContext, useState } from "react";
import "../style/Form.scss";
import NoteContext from "../context/notes/NoteContext";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const Form = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
        {/* <!-- Name input --> */}

        <MDBInput
          label="Title"
          name="title"
          type="text"
          className="my-4"
          value={note.title}
          id="title"
          minLength={5}
          required
          onChange={onChange}
        />
        <MDBInput
          label="Tag"
          name="tag"
          type="text"
          value={note.tag}
          id="tag"
          className="mb-4"
          onChange={onChange}
          required
        />
        <MDBTextArea
          onChange={onChange}
          label="Description"
          name="description"
          className="my-4"
          value={note.description}
          id="description"
          rows="4"
          required
        />

        <button
          type="submit"
          onClick={handleClick}
          disabled={
            note.title.length < 5 ||
            note.tag.length < 5 ||
            note.description.length < 5
          }
          className="btn btn-primary btn-block mb-4"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Form;

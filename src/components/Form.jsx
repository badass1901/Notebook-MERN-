import React, { useContext, useState } from "react";
import "../style/Form.scss";
import NoteContext from "../context/notes/NoteContext";

const Form = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.titl, note.description, note.tag);
  };
  return (
    <div>
      <form>
        {/* <!-- Name input --> */}
        <div className="form-outline formDiv mb-4">
          <input name="titl" type="text" id="title" className="form-control" />
          <div className="form-label" htmlFor="typeText">
            <label>Title</label>
          </div>
        </div>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <textarea
            onChange={onChange}
            name="description"
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <div className="form-label" htmlFor="form4Example3">
            <label>Description</label>
          </div>
        </div>

        {/* <!-- Checkbox --> */}
        {/* <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
        </div> */}

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-primary btn mb-4"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;

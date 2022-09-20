import React, { useContext } from "react";
import Form from "../components/Form";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h2 className="my-3">Add a Note</h2>
      <Form />
      <h2 className="my-3">Your Notes</h2>
      <ul className="card p-4">
        {notes.map((notes) => {
          return (
            <li className="card card-body mb-2" key={notes.id}>
              {notes.title} {notes.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

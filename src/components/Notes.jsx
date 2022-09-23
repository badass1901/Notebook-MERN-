import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <div className="container">
      <h2 className="my-3">Your Notes</h2>
      <div className="row p-4">
        {notes.map((note) => {
          return <NoteItem notes={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default Notes;

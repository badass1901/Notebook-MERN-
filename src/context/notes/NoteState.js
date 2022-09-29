import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // GET all Notes

  const getNotes = async () => {
    // API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNWY3NmMxODVlN2I5YzVkZmE4ODFkIn0sImlhdCI6MTY2MzQzMjU1Nn0.VDvmTSkoEvuSRkFyGEr0vDSRtQ6chru8gjgSeDdZq2I",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  // Add a new note
  const addNote = async (title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNDU3ZGM0NTAyNzA0YWJlOWE1NDQzIn0sImlhdCI6MTY2MjI4NDAyNH0.0lP3cfuuYlxxaI9pgmu6XS-vTsKdindXCJNbO7fGcik",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Add notes at client side
    const note = {
      _id: "6325f875e6f1443e9ea4a796" + 1,
      user: "6325f76c185e7b9c5dfa881d",
      title: title,
      description: description,
      tag: tag,
      date: "2022-09-17T16:40:21.825Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id, note) => {
    console.log("Deleting with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxNDU3ZGM0NTAyNzA0YWJlOWE1NDQzIn0sImlhdCI6MTY2MjI4NDAyNH0.0lP3cfuuYlxxaI9pgmu6XS-vTsKdindXCJNbO7fGcik",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // logic to edit in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

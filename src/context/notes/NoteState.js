import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6325f874e6f1443e9ea4a78e",
      user: "6325f76c185e7b9c5dfa881d",
      title: "DBMS",
      description: "Unit 1 Notes DBMS: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:20.984Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a790",
      user: "6325f76c185e7b9c5dfa881d",
      title: "DAA",
      description: "Unit 1 Notes DAA: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.193Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a792",
      user: "6325f76c185e7b9c5dfa881d",
      title: "CD",
      description: "Unit 1 Notes CD: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.371Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a794",
      user: "6325f76c185e7b9c5dfa881d",
      title: "ITCS",
      description: "Unit 1 Notes ITCS: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.552Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a796",
      user: "6325f76c185e7b9c5dfa881d",
      title: "OOSD",
      description: "Unit 1 Notes OOSD: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.825Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a new note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "6325f875e6f1443e9ea4a796",
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
  const deleteNote = () => {};
  // Edit note

  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

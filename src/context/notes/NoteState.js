import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6325f874e6f1443e9ea4a78e",
      user: "6325f76c185e7b9c5dfa881d",
      title: "OOSD",
      description: "Unit 1 Notes OOSD: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:20.984Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a790",
      user: "6325f76c185e7b9c5dfa881d",
      title: "OOSD",
      description: "Unit 1 Notes OOSD: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.193Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a792",
      user: "6325f76c185e7b9c5dfa881d",
      title: "OOSD",
      description: "Unit 1 Notes OOSD: Introduction to Classes and Objects",
      tag: "Semester 5th",
      date: "2022-09-17T16:40:21.371Z",
      __v: 0,
    },
    {
      _id: "6325f875e6f1443e9ea4a794",
      user: "6325f76c185e7b9c5dfa881d",
      title: "OOSD",
      description: "Unit 1 Notes OOSD: Introduction to Classes and Objects",
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
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

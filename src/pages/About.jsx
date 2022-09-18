import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

function About() {
  const a = useContext(noteContext);
  return <div>About {a.name + a.age}</div>;
}

export default About;

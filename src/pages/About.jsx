import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  }, []);
  return <div>About {a.state.name + " age is " + a.state.age}</div>;
}

export default About;

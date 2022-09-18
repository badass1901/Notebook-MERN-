import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Shashwat",
    age: "22",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;

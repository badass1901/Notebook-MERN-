import React, { useContext, useEffect, useState, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  //MDB variables
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  //Modal Form variables

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    toggleShow();
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <button ref={ref} className="btn d-none" onClick={toggleShow}>
        Open
      </button>
      <MDBModal
        staticBackdrop
        show={centredModal}
        setShow={setCentredModal}
        tabIndex="-1"
      >
        <MDBModalDialog centered size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Notes</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                {/* <!-- Name input --> */}

                <MDBInput
                  label="Title"
                  name="etitle"
                  type="text"
                  className="my-4"
                  value={note.etitle}
                  id="etitle"
                  onChange={onChange}
                />
                <MDBInput
                  label="Tag"
                  name="etag"
                  type="text"
                  value={note.etag}
                  id="etag"
                  className="mb-4"
                  onChange={onChange}
                  required
                />
                <MDBTextArea
                  onChange={onChange}
                  label="Description"
                  name="edescription"
                  className="my-4"
                  value={note.edescription}
                  id="edescription"
                  rows="4"
                  required
                />

                {/* <button
                  type="submit"
                  onClick={handleClick}
                  className="btn btn-primary btn-block mb-4"
                >
                  Add Note
                </button> */}
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <button className="btn btn-danger" onClick={toggleShow}>
                Close
              </button>
              <button
                className="btn btn-success"
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5 ||
                  note.etag.length < 5
                }
                onClick={handleClick}
              >
                Update Notes
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div>
        <h2 className="my-3">Your Notes</h2>
        <i>{notes.length === 0 && "No notes to display"}</i>
        <div className="row p-4">
          {notes.map((note) => {
            return (
              <NoteItem
                notes={note}
                key={note._id}
                updateNote={updateNote}
                toggleShow={toggleShow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;

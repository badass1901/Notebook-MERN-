import React from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2 className="my-3">Add a Note</h2>
        <Form />
      </div>
      <Notes />
    </>
  );
};

export default Home;

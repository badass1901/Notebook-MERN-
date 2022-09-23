import React from "react";

const Alert = (props) => {
  let invisible = "d-none";
  return (
    <div
      className={`d-flex flex-row justify-content-center ${invisible}`}
      role="alert"
    >
      <div className="alert alert-danger w-50 text-center position-absolute">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;

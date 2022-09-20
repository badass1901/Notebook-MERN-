import React from "react";
import "../style/Form.scss";

const Form = () => {
  return (
    <div>
      <form>
        {/* <!-- Name input --> */}
        <div className="form-outline formDiv mb-4">
          <input type="text" id="typeText" className="form-control" />
          <div className="form-label" htmlFor="typeText">
           <label>Name</label> 
          </div>
        </div>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <div className="form-label" htmlFor="form4Example3">
           <label>Message</label> 
          </div>
        </div>

        {/* <!-- Checkbox --> */}
        {/* <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
        </div> */}

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn mb-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;

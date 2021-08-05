import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
const defaultList = new Values("#f55142").all(5);

const Allcolor = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(defaultList);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      const values = new Values(`${color}`).all(5);
      setList(values);
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 ">
            <h1>Color Generator</h1>
          </div>
          <div className="col-md-8 mt-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group d-flex">
                <input
                  type="text"
                  className={`form-control  ${error ? "error" : null}`}
                  value={color}
                  onChange={handleChange}
                  aria-describedby="helpId"
                  placeholder="#1B65C4"
                />

                <button
                  type="submit"
                  className={` mx-2 btn btn-outline-success`}
                >
                  Submit
                </button>
              </div>
              {error && (
                <small className="text-danger">Provide Valid Color code</small>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {list.map((color, index) => {
            return <SingleColor key={index} color={color} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Allcolor;

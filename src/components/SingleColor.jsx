import React, { useEffect, useState } from "react";

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  const hex = `#${color.hex}`;

  const onAlert = () => {
    navigator.clipboard.writeText(hex);
    setAlert(true);
  };

  return (
    <>
      <div
        className={`col-md-2 col-6 height  ${index > 20 && "text"}`}
        style={{ backgroundColor: hex }}
        onClick={onAlert}
      >
        <div className="px-4 pb-2 pt-2">
          <h5>{hex}</h5>
          <h6>{color.weight}%</h6>
        </div>

        {alert ? <small>Copied to Clipborad</small> : ""}
      </div>
    </>
  );
};

export default SingleColor;

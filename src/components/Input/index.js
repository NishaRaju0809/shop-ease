import React from "react";

import "./styles.scss";

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input required className={"form-input"} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;

// TextInput.js
import React from "react";

const TextInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  isRequired,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label} {isRequired ? <span className="field-required">*</span> : ""}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}.`}
        onBlur={onBlur}
      />
     
    </div>
  );
};

export default TextInput;

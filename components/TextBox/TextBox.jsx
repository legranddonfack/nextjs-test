import React from 'react';
import './TextBox.module.css';
function TextBox(props) {
  const { label, type, name, value, placeholder, onChange, error } = props;
  return (
    <>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </>
  );
}

export default TextBox;

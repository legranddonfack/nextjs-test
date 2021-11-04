import React from 'react';

function Button(props) {
  const { value, onClick, prependIcon, appendIcon, loading } = props;

  return (
    <button onClick={onClick}>
      {prependIcon && prependIcon}
      {loading ? 'Loading...' : props.children}
      {appendIcon && appendIcon}
    </button>
  );
}

export default Button;

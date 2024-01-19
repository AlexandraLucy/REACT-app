import React from 'react';

function Button({ children, version, type, isdisabled }) {
  return (
    <button type={type} disabled = {isdisabled} className={`btn btn-${version}`}>
        {children} 
    </button>
  );
}
Button.fefaultprops ={
  type: "button",
  disabled: true,
  version: "secondary",
}

export default Button;

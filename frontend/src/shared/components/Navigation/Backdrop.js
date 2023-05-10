import React from 'react';
import ReactDOM from 'react-dom';

function Backdrop (props){
  return ReactDOM.createPortal(
    <div onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

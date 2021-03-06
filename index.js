import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList (props) {
  const arr = props.data;
  const listItems = arr.map((val, index)
    =>
      <li key={index}>{val}</li>
  );
  return <u1>{listItems}</u1>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />;

ReactDOM.render(
  el,
  document.getElementById('root')
);
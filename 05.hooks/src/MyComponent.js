import React, { useRef } from "react";

const MyComponent = () => {
  const id = useRef(1); //로컬변수
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refsample</div>;
};

export default MyComponent;

import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button data-testid="square" className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

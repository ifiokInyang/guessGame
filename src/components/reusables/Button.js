import React from "react";
import "../../styles.css";

export default function Button({ placeholder, classId, name, onclick }) {
  return (
    <>
      <button name={name} onClick={onclick} className={classId}>
        {placeholder}
      </button>
    </>
  );
}
import React from "react";
import "../../styles.css";

export default function TextField({
  name,
  value,
  handleChange,
  labelId,
  labelValue,
  inputId
}) {
  return (
    <>
      <label className={labelId}>{labelValue}</label>
      <input
        className={inputId}
        type="number"
        name={name}
        value={value}
        onChange={handleChange}
        ></input>
        *
    </>
  );
}

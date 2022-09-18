import React from "react";
import "../styles/button.css";

export default function Button({ btnText, btnClass, btnType }) {
  return (
    <button type={btnType} className={`custom_btn ${btnClass}`}>
      {btnText}
    </button>
  );
}

import React from "react";
import { useState } from "react";
export const TypeInput = () => {
  const [isClose, setIsClose] = useState(true);
  const clickHandler = () => {
    isClose ? setIsClose(false) : setIsClose(true);
  };
  return (
    <ul className="payment-form__input__type" onClick={clickHandler}>
      {isClose ? (
        <li>유형</li>
      ) : (
        <>
          <li>유형</li>
          <li>식비</li>
          <li>교통비</li>
          <li>통신비</li>
        </>
      )}
    </ul>
  );
};
//바깥 화면 누르면 드롭다운 사라지게 구현.

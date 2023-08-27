import React from "react";
import { useState } from "react";

export const MemoInput = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const changeMemoHandler = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.value);
  };
  return (
    <div className="payment-form__input__memo">
      <label for="memo">메모</label>
      <input type="checkbox" id="memo" onChange={changeMemoHandler} />
      {isChecked ? (
        <input
          type="string"
          id="memoString"
          onChange={props.changeInputHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

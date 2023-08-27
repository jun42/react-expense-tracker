import React from "react";

export const MemoInput = (props) => {
  const changeMemoHandler = (event) => {
    props.setObjectState((prevState) => ({
      ...prevState,
      isMemoChecked: event.target.checked,
    }));
    console.log(event.target.checked);
  };
  return (
    <div className="payment-form__input__memo">
      <label for="memo">메모</label>
      <input type="checkbox" id="memo" onChange={changeMemoHandler} />
      {props.objectState.isMemoChecked && (
        <input
          type="string"
          id="memoString"
          onChange={props.changeInputHandler}
        />
      )}
    </div>
  );
};

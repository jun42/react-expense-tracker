import React from "react";

export const DateInput = (props) => {
  return (
    <div className="payment-form__input__date">
      <label for="date">날짜</label>
      <input
        type="date"
        id="date"
        onChange={props.changeInputHandler}
        value={props.objectState.date}
      />
    </div>
  );
};

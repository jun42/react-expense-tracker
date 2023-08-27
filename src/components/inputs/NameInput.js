import React from "react";

export const NameInput = (props) => {
  return (
    <div className="payment-form__input__name">
      <label for="name">이름</label>
      <input
        type="text"
        id="name"
        onChange={props.changeInputHandler}
        value={props.objectState.name}
      />
    </div>
  );
};

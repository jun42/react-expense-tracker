import React from "react";

export const PriceInput = (props) => {
  return (
    <div className="payment-form__input__price">
      <label for="price">가격</label>
      <input
        type="number"
        id="price"
        onChange={props.changeInputHandler}
        value={props.objectState.price}
      />
    </div>
  );
};

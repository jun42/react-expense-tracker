import React from "react";

export const RepurchaseInput = (props) => {
  return (
    <div className="payment-form__input__repurchase">
      재구매의사
      <input
        type="radio"
        name="repurchase"
        id="repurchase"
        value="yes"
        onChange={props.changeInputHandler}
      />
      yes
      <input
        type="radio"
        name="repurchase"
        id="repurchase"
        value="no"
        onChange={props.changeInputHandler}
      />
      no
    </div>
  );
};

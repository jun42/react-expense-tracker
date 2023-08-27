import React from "react";

export const RepurchaseInput = (props) => {
  const radioBtnClickHandler = (event) => {
    // props.setRadioBtnChecked(event.target)
    event.target.value === "yes"
      ? props.setObjectState((prevState) => ({
          ...prevState,
          areRadioBtnsChecked: [true, false],
        }))
      : props.setObjectState((prevState) => ({
          ...prevState,
          areRadioBtnsChecked: [false, true],
        }));
  };
  return (
    <div className="payment-form__input__repurchase">
      재구매의사
      <input
        type="radio"
        name="repurchase"
        id="repurchase"
        value="yes"
        onChange={props.changeInputHandler}
        checked={props.objectState.areRadioBtnsChecked[0]}
        onClick={radioBtnClickHandler}
      />
      yes
      <input
        type="radio"
        name="repurchase"
        id="repurchase"
        value="no"
        onChange={props.changeInputHandler}
        checked={props.objectState.areRadioBtnsChecked[1]}
        onClick={radioBtnClickHandler}
      />
      no
    </div>
  );
};

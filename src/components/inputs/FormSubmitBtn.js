import React from "react";

export const FormSubmitBtn = (props) => {
  const submitBtnHandler = (event) => {
    event.preventDefault();
    //insert to stateObject
    props.setObjectState((prevState) => ({
      ...prevState,
      insert: Math.floor(Math.random() * 1000000),
    }));
    //
    console.log(props.objectState);
    // add data
    props.pushExpenseObject(props.objectState);
    //init state
    props.setObjectState({
      name: "", //string
      price: 0, //number
      date: new Date(), // yyyy--mm--dd
      type: null, // type object
      memoString: "", //string
      repurchase: null, // yes / no
      insert: null,
      isMemoChecked: false,
      areRadioBtnsChecked: [false, false],
    });
  };
  return (
    <button
      onClick={submitBtnHandler}
      className="payment-form__submit-button"
      type="submit"
    >
      추가
    </button>
  );
};

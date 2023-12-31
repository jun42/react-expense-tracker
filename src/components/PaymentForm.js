import React from "react";
import { useState } from "react";
import { MemoInput } from "./inputs/MemoInput";
import { TypeInput } from "./inputs/TypeInput";
import { DateInput } from "./inputs/DateInput";
import { NameInput } from "./inputs/NameInput";
import { PriceInput } from "./inputs/PriceInput";
import { RepurchaseInput } from "./inputs/RepurchaseInput";
import { FormSubmitBtn } from "./inputs/FormSubmitBtn";
import "./PaymentForm.css";
export const PaymentForm = (props) => {
  const [objectState, setObjectState] = useState({
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

  const changeInputHandler = (event) => {
    const targetObject = {};
    // console.log(typeof event.target.id);
    targetObject[event.target.id] = event.target.value;
    setObjectState((prevState) => ({ ...prevState, ...targetObject }));
  };

  return (
    <form className="payment-form">
      <NameInput
        changeInputHandler={changeInputHandler}
        objectState={objectState}
      />
      <PriceInput
        changeInputHandler={changeInputHandler}
        objectState={objectState}
      />
      <DateInput
        changeInputHandler={changeInputHandler}
        objectState={objectState}
      />
      <TypeInput setObjectState={setObjectState} />
      <MemoInput
        changeInputHandler={changeInputHandler}
        objectState={objectState}
        setObjectState={setObjectState}
      />
      <RepurchaseInput
        changeInputHandler={changeInputHandler}
        objectState={objectState}
        setObjectState={setObjectState}
      />
      <FormSubmitBtn
        pushExpenseObject={props.pushExpenseObject}
        objectState={objectState}
        setObjectState={setObjectState}
      />
    </form>
  );
};

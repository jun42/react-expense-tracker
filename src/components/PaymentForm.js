import React from "react";
import { useState } from "react";
import { MemoInput } from "./inputs/MemoInput";
import { TypeInput } from "./inputs/TypeInput";
import { DateInput } from "./inputs/DateInput";
import { NameInput } from "./inputs/NameInput";
import { PriceInput } from "./inputs/PriceInput";
import { RepurchaseInput } from "./inputs/RepurchaseInput";
export const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    date: new Date(),
    repurchase: null,
    // isMemo: false,
    memoString: "",
  });

  const changeInputHandler = (event) => {
    const targetObject = {};
    // console.log(typeof event.target.id);
    targetObject[event.target.id] = event.target.value;
    setObjectState((prevState) => ({ ...prevState, ...targetObject }));
  };
  console.log(objectState);
  console.log("rendered");
  const testChangeHandler = (event) => {
    console.log(event.target.value);
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
      <TypeInput />
      <MemoInput changeInputHandler={changeInputHandler} />
      <RepurchaseInput changeInputHandler={changeInputHandler} />
      <button className="payment-form__submit-button" type="submit">
        추가
      </button>
    </form>
  );
};

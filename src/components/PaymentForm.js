import React from "react";
import { MemoInput } from "./MemoInput";
import { TypeInput } from "./TypeInput";
import { useState } from "react";

export const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    date: new Date(),
    repurchase: null,
  });

  const changeInputHandler = (event) => {
    const targetObject = {};
    // console.log(typeof event.target.id);
    targetObject[event.target.id] = event.target.value;
    setObjectState((prevState) => ({ ...prevState, ...targetObject }));
  };
  console.log(objectState);
  const testChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form className="payment-form">
      <div className="payment-form__input">
        <label for="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={changeInputHandler}
          value={objectState.name}
        />
      </div>
      <div className="payment-form__input">
        <label for="price">가격</label>
        <input
          type="number"
          id="price"
          onChange={changeInputHandler}
          value={objectState.price}
        />
      </div>
      <TypeInput />
      <div className="payment-form__input">
        <label for="date">날짜</label>
        <input type="date" id="date" />
      </div>
      <MemoInput />
      <div className="payment-form__input">
        재구매의사
        <input
          type="radio"
          name="repurchase"
          id="repurchase"
          value="yes"
          onChange={changeInputHandler}
        />
        yes
        <input
          type="radio"
          name="repurchase"
          id="repurchase"
          value="no"
          onChange={changeInputHandler}
        />
        no
      </div>
      <button className="payment-form__submit-button" type="submit">
        추가
      </button>
    </form>
  );
};

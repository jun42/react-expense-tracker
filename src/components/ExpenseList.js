import React from "react";
import "./ExpenseList.css";

// {
//   name: "신발", //string
//   price: 100000, //number
//   date: "2023-08-27", // yyyy--mm--dd
//   type: { label: "의류비", value: "apparel" }, // type object
//   memoString: "하얀색", //string
//   repurchase: "no", // yes / no
//   insert: new Date(),
// },

export const ExpenseList = (props) => {
  return (
    <div className="expense-list">
      <div>{props.stateObject.name}</div>
      <div>{props.stateObject.price}</div>
      <div>{props.stateObject.date}</div>
      <div>{props.stateObject.type.label}</div>
      <div>{props.stateObject.memoString}</div>
      <div>{props.stateObject.repurchase}</div>
    </div>
  );
};

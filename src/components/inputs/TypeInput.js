import React from "react";
import { useState } from "react";
export const TypeInput = () => {
  const expenseTypes = [
    { label: "식비", value: "food" },
    { label: "월세", value: "rent" },
    { label: "교통비", value: "transportation" },
    { label: "의류비", value: "apparel" },
  ];
  const [isClose, setIsClose] = useState(true);
  const [selectedType, setSeletedType] = useState(null);
  const selectTypeHandler = (type) => {
    setSeletedType(type);
  };
  const clickHandler = () => {
    setIsClose((prevState) => !prevState);
  };

  const renderedTypes = expenseTypes.map((type) => {
    return (
      <div onClick={() => selectTypeHandler(type)} key={type.value}>
        {type.label}
      </div>
    );
  });
  return (
    <div className="payment-form__input__type" onClick={clickHandler}>
      {selectedType === null ? "소비유형" : selectedType.label}

      {!isClose && renderedTypes}
    </div>
  );
};
//바깥 화면 누르면 드롭다운 사라지게 구현.

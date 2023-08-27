import "./App.css";
import { PaymentForm } from "./components/PaymentForm";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { ExpenseList } from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenseObjects, setExpenseObjects] = useState([
    {
      name: "신발", //string
      price: 100000, //number
      date: "2023-08-27", // yyyy--mm--dd
      type: { label: "의류비", value: "apparel" }, // type object
      memoString: "하얀색", //string
      repurchase: "no", // yes / no
      insert: new Date(),
    },
  ]);
  return (
    <div className="wrapper">
      <Header />
      <Filters />
      {expenseObjects.forEach((stateObject) => {
        return <ExpenseList stateObject={stateObject} />;
      })}
      <PaymentForm />
    </div>
  );
}

export default App;

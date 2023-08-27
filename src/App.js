import "./App.css";
import { PaymentForm } from "./components/PaymentForm";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Filters />
      <ExpenseList />
      <PaymentForm />
    </div>
  );
}

export default App;

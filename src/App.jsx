import "./App.css";
import AddTodo from "./components/AddTodo";
import Footer from "./components/commonComponents/Footer";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo APP</h1>
      <span>(Made by Vineet Singh)</span>
      <AddTodo />
      <Todos />
      <Footer />
    </>
  );
}

export default App;

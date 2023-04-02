import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container-sm max-width text-center">
      <h1 className="p-5 title">TODO LIST</h1>
      <div className="container">
        {/* <div className="container border"> */}
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary">
            Add item
          </button>
          <Dropdown />
        </div>
        <div className="container px-3 py-2 mt-2 border bg-light rounded-4">
          <TodoItem
            title="Task 1"
            time={Date().toString()}
            status="Incomplete"
          />
          <TodoItem
            title="Task 2"
            time={Date().toString()}
            status="Incomplete"
          />
          <TodoItem title="Task 3" time={Date().toString()} status="Complete" />
        </div>
      </div>
    </div>
  );
}

export default App;

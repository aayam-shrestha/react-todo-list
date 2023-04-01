import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container-md text-center">
      <h1>TODO LIST</h1>
      <div className="container border">
        {/* <div className="container border"> */}
        <div className="d-flex justify-content-between">
          <div>
            <Button text="Add Task" />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
        {/* </div> */}
        <div className="container border">
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

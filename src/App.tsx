import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import TodoItem from "./components/TodoItem";
import Modal from "./components/Modal";

function App() {
  const addTask = () => {};

  let taskList = [];

  const onTaskAdd = (taskInfo: {}) => {
    console.log(taskInfo);
  };

  const showAllTasks = () => {};
  const showIncompleteTasks = () => {};
  const showCompleteTasks = () => {};

  return (
    <div className="container-md max-width text-center">
      <h1 className="p-5 title">TODO LIST</h1>
      <div className="container">
        {/* <div className="container border"> */}
        <div className="d-flex justify-content-between">
          {/* <button
            type="button"
            className="btn"
            style={{ backgroundColor: "mediumorchid", color: "white" }}
          >
            Add Task
          </button> */}
          <Modal modalClicked={addTask}>Add Task</Modal>
          <Dropdown
            showAllTasks={showAllTasks}
            showCompleteTasks={showCompleteTasks}
            showIncompleteTasks={showIncompleteTasks}
          />
        </div>
        <div className="container px-3 py-1 mt-2 border bg-light rounded-4">
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

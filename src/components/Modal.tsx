import { ReactNode, useState } from "react";
import "./styles/Modal.css";

interface Props {
  children: ReactNode;
  modalClicked: () => void;
}

const Modal = ({ children, modalClicked }: Props) => {
  const [modal, setModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState();
  const [taskComplete, setTaskComplete] = useState("off");

  const toggleModal = () => {
    setModal(!modal);
  };

  const Popup = () => {
    return (
      <>
        <div className="overlay">
          <div className="mymodal">
            <h1>Add TODO</h1>
            <label>Title</label>
            <input type="text" name="task" id="task" value={taskTitle} />
            <input
              type="checkbox"
              name="task-status"
              id="task-status"
              defaultChecked={false}
              value={taskComplete}
            />
            <button
              onClick={modalClicked}
              className="btn"
              style={{ backgroundColor: "mediumorchid", color: "white" }}
            >
              Add Task
            </button>
            <button onClick={toggleModal} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: "mediumorchid", color: "white" }}
        onClick={toggleModal}
      >
        {children}
      </button>
      {modal && <Popup />}
    </>
  );
};

export default Modal;

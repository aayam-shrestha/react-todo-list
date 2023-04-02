import Button from "./Button";
import Checkbox from "./Checkbox";
import { Trash, Edit2 } from "react-feather";

interface Props {
  title: string;
  time: string;
  status: "Complete" | "Incomplete";
}

const TodoItem = ({ title, time, status }: Props) => {
  return (
    <div className="container border rounded bg-white my-2">
      <div className="row align-items-center">
        <div className="col text-start">
          <div className="row align-items-center">
            <div className="col-1">
              <Checkbox />
            </div>
            <div className="col d-flex flex-column align-items-start">
              <p>{title}</p>
              <p>currentTime</p>
            </div>
          </div>
        </div>
        <div
          className="col-3 font-monospace d-flex justify-content-between"
          style={{ width: 120 }}
        >
          <button type="button" className="btn btn-secondary">
            <Trash size={18} />
          </button>
          <button type="button" className="btn btn-secondary">
            <Edit2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

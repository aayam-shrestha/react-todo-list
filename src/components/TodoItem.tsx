import Button from "./Button";
import Checkbox from "./Checkbox";

interface Props {
  title: string;
  time: string;
  status: "Complete" | "Incomplete";
}

const TodoItem = ({ title, time, status }: Props) => {
  return (
    <div className="container border">
      <div className="row align-items-center">
        <div className="col-1 ">
          <Checkbox />
        </div>
        <div className="col text-start">
          <p>{title}</p>
          <p>{time}</p>
        </div>
        <div className="col-1 font-monospace">
          <Button text="Delete" />
        </div>
        <div className="col-1 font-monospace">
          <Button text="Edit" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

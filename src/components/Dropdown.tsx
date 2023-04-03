interface Props {
  showAllTasks: () => void;
  showIncompleteTasks: () => void;
  showCompleteTasks: () => void;
}

const Dropdown = ({
  showAllTasks,
  showIncompleteTasks,
  showCompleteTasks,
}: Props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ width: 120 }}
      >
        All
      </button>
      <ul className="dropdown-menu">
        <li>
          <option className="dropdown-item" value="All" onClick={showAllTasks}>
            All
          </option>
        </li>
        <li>
          <option
            className="dropdown-item"
            value="Incomplete"
            onClick={showIncompleteTasks}
          >
            Incomplete
          </option>
        </li>
        <li>
          <option
            className="dropdown-item"
            value="Complete"
            onClick={showCompleteTasks}
          >
            Completed
          </option>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

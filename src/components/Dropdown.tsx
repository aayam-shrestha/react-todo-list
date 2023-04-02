const Dropdown = () => {
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
          <a className="dropdown-item" href="#">
            All
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Incomplete
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

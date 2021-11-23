import React from "react";

function TabButton({label, active, name, selected}) {
  return (
    <button
      style={{ color: "black" }}
      className={"nav-link" + active}
      id={"nav-" + name + "-tab"}
      data-bs-toggle="tab"
      data-bs-target={"#nav-" + name}
      type="button"
      role="tab"
      aria-controls={"nav-" + name}
      aria-selected={selected}
    >
      {label}
    </button>
  );
}

export default TabButton;

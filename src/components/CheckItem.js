import React from "react";
function CheckItem(props) {
  function deleteItems(e) {
    props.onDeleteItemChanged(props.item);
  }

  function onChange(e) {
    props.onItemChanged(props.item);
  }

  // editing
  function editItem() {
    let newLabel = prompt("Type new label!");
    if (newLabel === undefined || newLabel === "" || newLabel === null) {
      return;
    }
    if (newLabel.length >= 25) {
      alert("Item lenght should be less than 25");
      return;
    }
    props.onEditItem(newLabel, props.item);
  }

  return (
    <div className="todo-item">
      <div>
        <input
          className="custom-checkbox"
          type="checkbox"
          name=""
          id=""
          checked={props.item.checked}
          onChange={onChange}
        />
        <label
          style={{
            textDecoration: props.item.checked ? "line-through" : "none",
          }}
        >
          {props.item.label}
        </label>
      </div>

      <div className="actions-btn">
        <span
          style={{ marginLeft: "10px", cursor: "pointer" }}
          onClick={deleteItems}
        >
          &#128473;
        </span>
        <button onClick={editItem}>Edit</button>
      </div>
    </div>
  );
}

export default CheckItem;

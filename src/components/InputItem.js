import React, { useState } from "react";

function InputItem(props) {
  let [label, setLabel] = useState("");
  let [completeAllItemsVal, setCompleteAllItems] = useState(true);
  let [clearAllItemsVal, setClearAllItems] = useState(true);

  function trackChangeInputField(e) {
    setLabel(e.target.value);
  }

  function addItems(e) {
    if (label === "") {
      alert("Input field is empty");
      return;
    }

    props.addItemsChanged(label);
    setLabel("");
  }

  function completeAllItems() {
    if (completeAllItemsVal) {
      setCompleteAllItems(false);
    } else {
      setCompleteAllItems(true);
    }

    props.onCompleteAllItemChanged(completeAllItemsVal);
  }

  function removeAllItems() {
    props.onClearAllItemsChanged(clearAllItemsVal);
  }

  return (
    <div className="todo-naviagtion">
      <div className="input-field">
        <input
          type="text"
          name=""
          maxLength="25"
          id=""
          placeholder="Enter new item..."
          value={label}
          onChange={trackChangeInputField}
        />
        <button onClick={addItems}>Add item</button>
      </div>

      <div className="btn-container">
        <button onClick={completeAllItems}>Complete all</button>
        <button onClick={removeAllItems}>Clear all</button>
      </div>
    </div>
  );
}

export default InputItem;

import React from "react";
import CheckList from "./CheckList";
function ToDoList(props) {
  function onItemChanged(item) {
    props.onItemChanged(item);
  }

  function addItemsChanged(label) {
    props.addItemsChanged(label);
  }
  function onDeleteItemChanged(item) {
    props.onDeleteItemChanged(item);
  }
  function onCompleteAllItemChanged(itemState) {
    props.onCompleteAllItemChanged(itemState);
  }
  function onClearAllItemsChanged(clearAllItems) {
    props.onClearAllItemsChanged(clearAllItems);
  }

  function onEditItem(newLabel, item) {
    props.onEditItem(newLabel, item);
  }

  return (
    <div>
      <h1>React-Hooks</h1>
      <CheckList
        items={props.data}
        onItemChanged={onItemChanged}
        addItemsChanged={addItemsChanged}
        onDeleteItemChanged={onDeleteItemChanged}
        onCompleteAllItemChanged={onCompleteAllItemChanged}
        onClearAllItemsChanged={onClearAllItemsChanged}
        onEditItem={onEditItem}
      />
    </div>
  );
}

export default ToDoList;

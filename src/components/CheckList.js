import React from "react";
import CheckItem from "./CheckItem";
import InputItem from "./InputItem";

function CheckList(props) {
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
      <InputItem
        addItemsChanged={addItemsChanged}
        onCompleteAllItemChanged={onCompleteAllItemChanged}
        onClearAllItemsChanged={onClearAllItemsChanged}
      />
      {props.items.length ? (
        props.items.map((item) => (
          <CheckItem
            item={item}
            onItemChanged={onItemChanged}
            onDeleteItemChanged={onDeleteItemChanged}
            onEditItem={onEditItem}
          />
        ))
      ) : (
        <div style={{ color: "red" }}>There are no todos...</div>
      )}
    </div>
  );
}
export default CheckList;

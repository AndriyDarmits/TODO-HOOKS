import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
const defaultData = [
  {
    label: "Start",
    checked: false,
    index: 0,
  },
  {
    label: "Components",
    checked: false,
    index: 1,
  },
  {
    label: "LifeCycle",
    checked: false,
    index: 2,
  },
  {
    label: "Hooks",
    checked: false,
    index: 3,
  },
];

function App() {
  let [data, setData] = useState(defaultData);

  // add items

  const addItemsChanged = (text) => {
    console.log(data);
    setData([
      ...data,
      {
        label: text,
        checked: false,
        index: data.length,
      },
    ]);
  };
  //delete items
  const onDeleteItemChanged = (deleteItem) => {
    const deleteItems = data.filter((item) => item.index !== deleteItem.index);
    setData([...deleteItems]);
  };

  //change checked state
  const onItemChanged = (changedItem) => {
    const changeItems = data.map((item) => {
      if (item.index === changedItem.index) {
        item.checked = !item.checked;
      }
      return item;
    });
    // sorting
    for (let i = 0; i < changeItems.length; i++) {
      if (changeItems[i].checked) {
        changeItems.push(changeItems[i]);
        changeItems.splice(
          changeItems.findIndex((item) => item === changeItems[i]),
          1
        );
        break;
      }
    }

    setData([...changeItems]);
  };

  // complete all items
  const onCompleteAllItemChanged = (itemState) => {
    const changeItems = data.map((item) => {
      if (itemState) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      return item;
    });

    setData([...changeItems]);
  };

  // clear all items

  const onClearAllItemsChanged = (clearAllItems) => {
    if (clearAllItems) {
      setData([]);
    }
  };

  // editing
  const onEditItem = (newLabel, checkingItem) => {
    const editedLabel = data.map((item) => {
      if (item.index === checkingItem.index) {
        item.label = newLabel;
      }
      return item;
    });
    setData([...editedLabel]);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <div className="todo-content">
          <div className="todo-content-inner">
            <ToDoList
              data={data}
              onItemChanged={onItemChanged}
              addItemsChanged={addItemsChanged}
              onDeleteItemChanged={onDeleteItemChanged}
              onCompleteAllItemChanged={onCompleteAllItemChanged}
              onClearAllItemsChanged={onClearAllItemsChanged}
              onEditItem={onEditItem}
            />
            <Footer data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

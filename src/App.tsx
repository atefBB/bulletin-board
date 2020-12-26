import React from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

import "./App.css";

export default function App() {
  const [item, setItem] = React.useState("");
  const [items, setItems] = React.useState(
    JSON.parse(localStorage.getItem("items")!) || []
  );

  function addNewItem() {
    if (item.trim() !== "") {
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light"
        }),
        defaultPos: { x: 150, y: 10 }
      };
      setItems((items: any) => [...items, newitem]);
      setItem("");
    } else {
      alert("Enter a item");
      setItem("");
    }
  }

  function addNewItemOnKeyPress(event: any) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      addNewItem();
    }
  }

  function updatePos(data: any, index: any) {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  }

  function deleteNote(id: any) {
    setItems(items.filter((item: any) => item.id !== id));
  }

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <div id="new-item">
        <input
          value={item}
          onChange={(e: any) => setItem(e.target.value)}
          placeholder="اكتب شيئا"
          onKeyPress={(e: any) => addNewItemOnKeyPress(e)}
        />
      </div>
      <button onClick={addNewItem}>إضافة</button>
      {items.map((item: any, index: any) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e: any, data: any) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              <button id="delete" onClick={(e: any) => deleteNote(item.id)}>
                X
              </button>
              <span>{item.item}</span>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

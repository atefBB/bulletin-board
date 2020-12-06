import React from "react";
import "./App.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

export default function App() {
  const [item, setItem] = React.useState("");
  const [items, setItems] = React.useState(
    JSON.parse(localStorage.getItem("items")!) || []
  );

  const newitem = () => {
    if (item.trim() !== "") {
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
      setItems((items: any) => [...items, newitem]);
      setItem("");
    } else {
      alert("Enter a item");
      setItem("");
    }
  };

  const keyPress = (event: any) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updatePos = (data: any, index: any) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id: any) => {
    setItems(items.filter((item: any) => item.id !== id));
  };

  return (
    <div className="App">
      <div id="new-item">
        <input
          value={item}
          onChange={(e: any) => setItem(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e: any) => keyPress(e)}
        />
        <button onClick={newitem}>ENTER</button>
      </div>
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
              {`${item.item}`}
              <button id="delete" onClick={(e: any) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

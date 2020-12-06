// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState, useEffect } from "react";
import "./App.css";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-draggable' or its corres... Remove this comment to see the full error message
import Draggable from "react-draggable";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'uuid' or its corresponding typ... Remove this comment to see the full error message
import { v4 as uuidv4 } from "uuid";
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
var randomColor = require("randomcolor");

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
    JSON.parse(localStorage.getItem("items")) || []
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

  useEffect(() => {
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
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="App">
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div id="new-item">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <input
          value={item}
          onChange={(e: any) => setItem(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e: any) => keyPress(e)}
        />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button onClick={newitem}>ENTER</button>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
      {items.map((item: any, index: any) => {
        return (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e: any, data: any) => {
              updatePos(data, index);
            }}
          >
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div style={{ backgroundColor: item.color }} className="box">
              {`${item.item}`}
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <button id="delete" onClick={(e: any) => deleteNote(item.id)}>
                X
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              </button>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
          </Draggable>
        );
      })}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}

export default App;

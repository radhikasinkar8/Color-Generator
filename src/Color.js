import React, { useState, useEffect } from "react";

function Color() {
  const [update, setUpdate] = useState(["#fff"]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log(update, counter);
  }, [update]);

  function ChangeColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    setUpdate([...update, randomCode]);
    setCounter(counter + 1);
    console.log("code", randomCode, counter);
  }

  function prev() {
    if (counter > 1) {
      setCounter(counter - 1);
      console.log("prev", counter);
    }else{
      setCounter(update.length)
    }
  }

  function Next() {
    if (update.length === counter) {
      ChangeColor();
      console.log("nextif", update.length, counter);
    } else {
      setCounter(counter + 1);
      console.log("elseNext", counter);
    }
  }

  return (
    <div>
      <div
        style={{ backgroundColor: `${update[counter - 1]}` }}
        className="color"
      >
        <h1>{update[counter - 1]}</h1>
        <button disabled={counter < 1} onClick={prev}>
          Previous{" "}
        </button>
        <button onClick={Next}>Next</button>
      </div>
    </div>
  );
}
export default Color;

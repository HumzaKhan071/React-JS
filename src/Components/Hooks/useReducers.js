import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducers = () => {
  const intialize = 0;

  const [state, dispatch] = useReducer(reducer, intialize);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          class="button2"
          onClick={() => {
            dispatch({ type: "INCR" });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => {
            state > 0 ? dispatch({ type: "DECR" }) : alert("Sorry, Zero Limit");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducers;

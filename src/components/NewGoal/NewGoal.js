import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredtext, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredtext,
    };

    setEnteredText("");

    props.onAddGoal(newGoal); //exectute the function pointed to, I expect to get a newGoal as an argument / parameter
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredtext} onChange={textChangeHandler} />
      <button type="submit" className="add-btn">
        Add New Goal
      </button>
    </form>
  );
};

export default NewGoal;

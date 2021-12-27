import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  let enteredtext = "";

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredtext,
    };

    console.log(newGoal);

    props.onAddGoal(newGoal); //exectute the function pointed to, I expect to get a newGoal as an argument / parameter
  };

  const textChangeHandler = (event) => {
    enteredtext = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangeHandler} />
      <button type="submit" className="add-btn">
        Add New Goal
      </button>
    </form>
  );
};

export default NewGoal;

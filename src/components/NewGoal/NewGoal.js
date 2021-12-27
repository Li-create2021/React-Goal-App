import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal!",
    };

    props.onAddGoal(newGoal); //exectute the function pointed to, I expect to get a newGoal as an argument / parameter
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit" className="add-btn">
        Add New Goal
      </button>
    </form>
  );
};

export default NewGoal;

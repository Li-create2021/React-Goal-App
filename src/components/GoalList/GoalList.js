import React from "react";
import "./GoalList.css";

const GoalList = (props) => {
  console.log(props.courseGoals);
  return (
    <ul className="goal-list">
      {props.courseGoals.map((courseGoal) => {
        return <li key={courseGoal.id}> {courseGoal.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;

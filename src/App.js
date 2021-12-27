import React from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

//functional components
const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish this Course" },
    { id: "cg2", text: "Learn all the main topics" },
    { id: "cg3", text: "Help others with Q&A" },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div>
      <h2 className="course-goals">Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList courseGoals={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>;
//   }
// }

export default App;

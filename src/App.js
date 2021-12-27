import React from "react";
import "./App.css";
import GoalList from "./components/GoalList";

//functional components
const App = () => {
  return (
    <div>
      <h2 className="course-goals">Course Goals</h2>
      <GoalList />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>;
//   }
// }

export default App;

import React from "react";
import TaskList from "../components/TaskList.jsx"; // Import TaskList component

const Dashboard = () => {
  return (
    <div>
      <h1>Your Tasks</h1>
      <TaskList /> {/* Include TaskList component */}
    </div>
  );
};

export default Dashboard;

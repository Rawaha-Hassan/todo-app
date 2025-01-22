import React, { useEffect, useState } from "react";
import prisma from "../lib/prisma";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await prisma.task.findMany();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Task List</h2>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{task.name}</span>
            {/* Add edit and delete buttons here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

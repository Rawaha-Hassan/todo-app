import React from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import prisma from "../lib/prisma"; // Import Prisma client

const TaskItem = ({ task }) => {
  // Accept task as a prop
  const router = useRouter(); // Initialize useRouter

  const handleEdit = async (id) => {
    // Logic to navigate to edit page
    router.push(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    // Logic to delete the task
    await prisma.task.delete({ where: { id: id } });
    // Optionally, refresh the task list or navigate back
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <h3 className="text-lg">{task.name}</h3> {/* Display task name */}
      <div>
        <button
          onClick={() => handleEdit(task.id)}
          className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>{" "}
        {/* Edit button */}
        <button
          onClick={() => handleDelete(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>{" "}
        {/* Delete button */}
      </div>
    </div>
  );
};

export default TaskItem;

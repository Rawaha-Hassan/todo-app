import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import TaskList from "../components/TaskList";

// Mock the Prisma client
jest.mock("../lib/prisma", () => ({
  task: {
    findMany: jest.fn().mockResolvedValue([{ id: 1, name: "Test Task" }]),
    delete: jest.fn(),
  },
}));

describe("TaskList Component", () => {
  test("renders Task List heading", async () => {
    await act(async () => {
      render(<TaskList />);
    });
    const headingElement = screen.getByText(/Task List/i);
    expect(headingElement).toBeInTheDocument();
  });
});

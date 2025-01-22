# Todo App

## Overview
This is a simple Todo application built with Next.js, TailwindCSS, and Prisma. It allows users to manage their tasks efficiently.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- View all tasks in a list

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/YOUR_USERNAME/todo-app.git
   ```
2. Navigate to the project directory:
   ```
   cd todo-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the database:
   - Ensure you have PostgreSQL installed and running.
   - Update the `.env` file with your database connection string.
   - Run migrations:
     ```
     npx prisma migrate dev
     ```

## Running the Application
To start the development server, run:
```
npm run dev
```
Then, open your browser and navigate to `http://localhost:3000`.

## Testing
To run the tests, use:
```
npx jest
```

## Screenshots
- Include screenshots of the application pages (Home, Sign In, Register, Dashboard, Edit Page) showing the implemented functionalities.

## Database Dump
- Provide a dump of the PostgreSQL database used for testing the solution.

## Time Complexity
- Task addition: O(1)
- Task deletion: O(n)
- Task fetching: O(n)

## Assumptions
- The application assumes that the user has a basic understanding of how to use a web application.

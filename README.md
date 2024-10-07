# Task Management Application

This is a Task Management Application built using React.js and Redux for state management. The application allows users to view, add, update, and delete tasks while managing the state using Redux. It also implements local storage persistence using `redux-persist`.

## Features

- **View Tasks**: Display a list of tasks with title, status (completed/incomplete), and action buttons (Edit, Delete, Toggle Status).
- **Add a New Task**: A form to input task title and submit it. Includes validation to ensure the title is not empty.
- **Update a Task**: Ability to edit the task title and update it in the Redux store.
- **Toggle Task Status**: Change the status of tasks between completed and incomplete.
- **Delete a Task**: Remove tasks from the list.
- **Local Storage Persistence**: Use of `redux-persist` to save the Redux state between browser sessions.
- **Redux State Management**: Efficient management of tasks using Redux, with actions and reducers for add, edit, delete, and toggle operations.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Redux**: State management library to manage the application state.
- **redux-persist**: Middleware to persist the Redux store in local storage.
- **CSS**: Basic styling for the application.

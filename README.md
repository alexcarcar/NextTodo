# Next.js Todo App

This is a simple Todo List application built with Next.js and React using TypeScript. The application allows users to add, remove, and toggle the completion status of todo items.

## Features

- Add new todo items
- Remove existing todo items
- Toggle completion status of todos
- Responsive design

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 12 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexcarcar/NextTodo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NextTodo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

Then, you can start the production server with:

```bash
npm start
```

## Usage

Once the application is running, you can:

- Add a new todo by typing in the input field and pressing Enter.
- Remove a todo by clicking the delete button next to it.
- Toggle the completion status by clicking on the todo item.

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

### Running Tests

To run all tests, use:

```bash
npm test
```

Test files are located alongside components and use the `.test.tsx` or `.test.ts` extension.

### Example

To run tests with coverage:

```bash
npm test -- --coverage
```

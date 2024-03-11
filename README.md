## The process of adding new mock data

1. Creating a new JSON file and naming it according to the camelCase rule (path: 'mock/*');
2. Adding a new key-value pair with the same name to the enum TableType (the key name should match the file name) (path: 'src/store/type.ts')
3. Following the breadcrumb trail in TypeScript

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing and other features.
- **Redux Toolkit**: A library for managing application state in React applications.
- **Styled Components**: A library for styling React components using tagged template literals.

## Scripts

- **start**: Runs the webpack dev server in development mode.
- **build**: Builds the application for production using webpack.
- **eslint**: Runs ESLint to lint TypeScript files in the `src` directory and fix issues automatically.

## Running the Application

To run the application, follow these steps:

1. Ensure Node.js is installed on your computer.
2. Clone the repository to your computer.
3. Navigate to the project directory.
4. Install dependencies by running `npm install`.
5. Start the development server with `npm start`.


# Quizzical

Quizzical is a trivia-based web application built using React. The application allows users to start a quiz, answer multiple-choice questions, and get their score at the end. The questions are fetched from the Open Trivia Database (OpenTDB) API.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Future Enhancements](#future-enhancements)

## Features
- Fetches trivia questions from the OpenTDB API.
- Allows users to select answers for multiple-choice questions.
- Provides feedback by displaying the score after the quiz.
- Option to restart the trivia after completion.

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/avi4h/quizzical.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quizzical
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
To start the development server, run:
```bash
npm start
# or
yarn start
```
This will start the app on `http://localhost:3000`.

## Project Structure
```bash
quizzical/
├── public/
├── src/
│   ├── components/
│   │   ├── Start.jsx
│   │   ├── Quiz.jsx
│   │   ├── End.jsx
│   │   └── Modal.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
└── package.json
```

### Key Components
- **Start.jsx**: The initial screen that prompts the user to start the trivia.
- **Quiz.jsx**: Displays the trivia questions and handles user interaction with the answers.
- **End.jsx**: Displays the user's score and provides an option to restart the trivia.
- **Modal.jsx**: A loading modal displayed while the trivia data is being fetched.

### State Management
The app uses React's `useState` to manage the following states:
- **justStarted**: Tracks whether the trivia has started.
- **questionsList**: Stores the list of questions fetched from the API.
- **checked**: Tracks whether the answers have been checked.
- **score**: Stores the user's score.
- **loading**: Indicates whether the app is in the loading state while fetching data.

### API Integration
The trivia questions are fetched from the OpenTDB API:
```javascript
fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
  .then(response => response.json())
  .then(data => {
    // Processing and setting questionsList state
  })
  .catch(error => {
    console.error('Error fetching questions:', error)
  })
```
- **html-entities**: Used to decode HTML entities in the fetched questions and answers.
- **nanoid**: Generates unique IDs for questions and options.

### Styling
The application is styled using a combination of CSS classes defined in `App.css`.

## Future Enhancements
- **Customization Options**: Allow users to select the number of questions or difficulty level.
- **Timer**: Add a countdown timer for each question.
- **Leaderboard**: Implement a leaderboard to track high scores.

---

Feel free to adjust the content based on any additional details or changes you make to the project!

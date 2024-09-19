# Quizzical

Quizzical is a trivia-based web application built using React and Open Trivia Database (OpenTDB) API.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [API Integration](#api-integration)

## Getting Started

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

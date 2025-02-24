# Schedule Optimizer

## Overview

The Schedule Optimizer is a React-based web application designed to help students manage and optimize their university course schedules. It provides features such as course browsing, instructor information, personalized dashboards, and an AI-powered academic advisor.

## Features

-   **Dashboard:** Personalized view of enrolled courses.
-   **Course Catalog:** Browse available university courses.
-   **Instructor Directory:** Access instructor profiles and office hours.
-   **AI Academic Advisor:** Get instant answers to academic questions.
-   **Student Feedback:** Provide and view feedback on courses.
-   **Theme Customization:** Customize the app's appearance with multiple themes.

## Technologies Used

-   **Frontend:** React, React Router, Tailwind CSS, DaisyUI
-   **Backend:** Node.js, Express.js
-   **Database:** PostgreSQL
-   **AI Integration:** OpenAI
-   **Session Management:** express-session, connect-session-sequelize

## Setup Instructions

Follow these instructions to set up the Schedule Optimizer application on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://www.npmjs.com/) (Node Package Manager)
-   [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/omadDB/schedule-optimizer.git
    cd schedule-optimizer
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

### Configuration

1.  **Set up PostgreSQL:**

    -   Create a new PostgreSQL database for the application.
    -   Update the `.env` file in the `server` directory with your PostgreSQL connection details:

        ```
        DB_NAME=your_db_name
        DB_USERNAME=your_db_username
        DB_PASSWORD=your_db_password
        DB_HOST=localhost
        ```

2.  **Set up OpenAI API Key:**

    -   Obtain an API key from [OpenAI](https://openai.com/).
    -   Add the API key to the `.env` file in the `server` directory:

        ```
        OPENAI_API_KEY=your_openai_api_key
        SECRET_KEY=your_secret_key
        ```

        Generate `your_secret_key` using the following command:

        ```bash
        node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
        ```

### Database Initialization

1.  **Initialize the database:**

    Navigate to the `server` directory and run the `initdb.js` script to populate the database with initial data:

    ```bash
    cd server
    node initdb.js
    ```

    This script creates tables for students, courses, and instructors, and populates them with sample data.

### Running the Application

1.  **Start the backend server:**

    Open a terminal, navigate to the `server` directory, and run:

    ```bash
    npm run start
    ```

    The server will start on port 3000.

2.  **Start the frontend development server:**

    Open another terminal, navigate to the `client` directory, and run:

    ```bash
    npm run dev
    ```

    The frontend development server will start, and the application will be accessible in your browser, usually at `http://localhost:5173`.

### Environment Variables

The following environment variables are used by the application:

-   `DB_NAME`: The name of the PostgreSQL database.
-   `DB_USERNAME`: The username for the PostgreSQL database.
-   `DB_PASSWORD`: The password for the PostgreSQL database.
-   `DB_HOST`: The host address for the PostgreSQL database (usually `localhost`).
-   `OPENAI_API_KEY`: The API key for accessing the OpenAI API.
-   `SECRET_KEY`: A secret key used for session management.

Make sure to configure these variables correctly in your `.env` file.

### API Endpoints

The backend server provides the following API endpoints:

-   `GET /registration`: Serves the registration page.
-   `GET /api/v1/available-university-courses`: Retrieves a list of available university courses.
-   `GET /api/v1/user-courses`: Retrieves the courses a user is enrolled in.
-   `GET /api/v1/instructors`: Retrieves a list of instructors.
-   `POST /api/v1/login-user`: Logs in a user.
-   `POST /api/v1/new-course`: Adds a new course to a user's schedule.
-   `POST /api/v1/delete-user-course`: Deletes a course from a user's schedule.
-   `POST /api/v1/student-prompt`: Sends a prompt to the AI academic advisor.
-   `POST /api/v1/courses/:courseID/student-feedback`: Submits student feedback for a course.
-   `GET /api/v1/course-feedback/:courseID`: Retrieves student feedback for a course.
-   `GET /api/v1/logout-user`: Logs out a user.
-   `GET *`: Serves the main application.

### Folder Structure

```
schedule-optimizer/
├── client/             # React frontend
│   ├── src/          # Source code
│   ├── public/       # Public assets
│   ├── ...
├── server/             # Node.js/Express backend
│   ├── app.js        # Express application setup
│   ├── server.js     # Main server file
│   ├── db/           # Database models
│   ├── utils/        # Utility functions
│   ├── ...
├── ...
```

### Additional Information

-   The `client` directory contains the React frontend, built using Vite.
-   The `server` directory contains the Node.js/Express backend, which handles API requests and database interactions.
-   The `db/models` directory contains the Sequelize models for the database tables.
-   The `utils` directory contains utility functions for tasks such as verifying student credentials and sending prompts to the OpenAI API.

### Contributing

Contributions to the Schedule Optimizer project are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.


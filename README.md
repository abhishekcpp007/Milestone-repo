# Milestone-repo
# README: Blog Post Management

This README file provides an overview of the Blog Post Management script. The script uses JavaScript to manage a simple blog post system on a web page. By capturing blog post data from a form, storing it in the browser's local storage, and rendering the posts on the page, this script enables users to create and view blog posts dynamically.

## Purpose

The purpose of this script is to facilitate the creation and display of blog posts on a web page. By leveraging the `document.addEventListener("DOMContentLoaded")` event and local storage, the script ensures that users' blog posts are saved and accessible even after page reloads.

## How It Works

The script comprises the following main components:

### Event Listener for Form Submission

The script listens for the `submit` event on the blog form element (`#blog-form`). When the user submits the form, it captures the blog title and content from the respective input fields and proceeds to create a new blog post.

### Creating and Saving a Blog Post

Once the user submits the form with a valid title and content, the script creates a blog post object containing the title and content. It then saves this object in the browser's local storage using the `saveBlogToLocalStorage()` function.

### Rendering Blog Posts

The `renderBlogPost()` function takes a blog post object as input and generates a new list item (`<li>`) to represent the blog post. It populates the list item with the title and content of the blog post and appends it to the `#blog-list` element on the page.

### Loading Existing Blog Posts

On page load, the `loadExistingBlogs()` function retrieves blog post data from the local storage (if available) and renders all existing blog posts using the `renderBlogPost()` function.

## Usage

To use the Blog Post Management script, follow these steps:

1. Include the script in your HTML file. You can place it within a `<script>` tag or link to an external JavaScript file.

2. Add a form with input fields for the blog title and content. Assign the form an ID of `blog-form`.

3. Create an empty unordered list (`<ul>`) with an ID of `blog-list` to display the blog posts.

4. Whenever a user submits the form with a valid title and content, the script will store the blog post in the local storage and display it as a list item on the page.

5. Existing blog posts from the local storage will be rendered on page load.

## Note

Please ensure that the script is executed within an HTML file containing the necessary form and list elements with the specified IDs (`#blog-form` and `#blog-list`).

## Contribution

Contributions to improve the functionality and performance of the Blog Post Management script are welcome. Feel free to submit pull requests or open issues for any proposed changes or bug fixes.

######
# Project README: Movie Search App

This README file serves as a comprehensive guide to understanding the functionalities of the Movie Search App project. It outlines the purpose, features, and potential benefits of the application, providing valuable context to anyone interested in exploring the repository.

## Purpose

The Movie Search App is a web-based application that allows users to search for details about movies using the OMDB (Open Movie Database) API. The primary purpose of this project is to provide users with an easy and efficient way to look up information about their favorite movies. The application retrieves movie data based on user input and displays the movie title and poster.

## Features

The Movie Search App comes with the following features:

1. **Movie Search:** Users can enter the title of a movie in the search input field to fetch information about that movie from the OMDB API.

2. **OMDB API Integration:** The application integrates with the OMDB API using a provided API key to access movie data.

3. **Data Validation:** Before making the API request, the application checks if the input field is not empty. If the input is empty, it displays an alert prompting the user to enter a movie title.

4. **Error Handling:** The app handles errors gracefully. If the API response indicates that the movie is not found or an error occurs during the API request, it displays an appropriate error message to the user.

## Potential Benefits

The Movie Search App offers several potential benefits:

1. **Quick Access to Movie Information:** Users can easily search for movie details without leaving the application.

2. **Saves Time and Effort:** Instead of manually searching for movie information online, the app streamlines the process by fetching the data automatically.

3. **User-Friendly Interface:** The app provides a simple and intuitive interface, making it accessible to users of all skill levels.

4. **Learning and Integration:** Developers can study the source code to understand API integration, error handling, and DOM manipulation concepts, which can be useful in other projects.

## Usage

To use the Movie Search App, follow these steps:

1. Clone the repository to your local machine.

2. Obtain an OMDB API key from the OMDB website and replace the placeholder `apiKey` in the `searchMovie` function with your actual API key.

3. Open the `index.html` file in a web browser.

4. Enter the title of the movie you want to search for in the input field and click the "Search" button.

5. If the movie is found, the application will display its title and poster. If not, it will show an error message.

## Note

Please ensure that you have a stable internet connection to use the Movie Search App, as it relies on making API requests to retrieve movie data.

## Contribution

We welcome contributions to enhance the Movie Search App. If you have any bug fixes, improvements, or new features to propose, feel free to submit a pull request. For major changes, please open an issue to discuss the proposed changes first.
***********

# Todo App

This is a simple Todo application built using React and Express. The application allows users to add, update, and remove todos. The backend server is powered by Node.js and MongoDB is used to store the todo items.

## How to Use

1. Clone the repository and navigate to the project directory.

2. Install dependencies for the frontend and backend:

```bash
# Install frontend dependencies
cd todo-frontend
npm install

# Install backend dependencies
cd ../todo-backend
npm install
```

3. Start the backend and frontend servers:

```bash
# Start the backend server on http://localhost:5000
cd todo-backend
node app.js

# Start the frontend development server on http://localhost:3000
cd todo-frontend
npm start
```

4. Open your web browser and go to http://localhost:3000 to access the Todo application.

## Features

- The home page displays a list of existing todos with their titles and statuses (completed/pending).
- Users can add new todos by typing the task in the input field and clicking the "Add" button. The entered task will be displayed on the UI.
- Users can click on a todo to update its status (completed to pending or pending to completed).
- Each todo card has a "Remove" button that allows users to remove a todo from the list.

## Technologies Used

- React: Frontend JavaScript library for building user interfaces.
- Express: Backend web framework for Node.js.
- MongoDB: NoSQL database for storing todo items.
- Axios: Promise-based HTTP client for making API requests.

## Folder Structure

The project has the following folder structure:

- `todo-backend`: Contains the backend server code.
- `todo-frontend`: Contains the frontend React code.

## API Endpoints

- `GET /api/todos`: Get all existing todos.
- `POST /api/todos`: Create a new todo.
- `PATCH /api/todos/:id`: Update the status of a todo.
- `DELETE /api/todos/:id`: Delete a todo.

## Note

Please make sure you have Node.js and MongoDB installed on your system before running the application.

---

Thank you for using the Todo App! If you have any questions or feedback, feel free to reach out. Happy task management! 📝

# Node Website

This project serves static HTML pages using a Node.js server by serving pages based on URL endpoints.

## Setup and Installation

Follow these instructions to get this website running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ForkEyeee/node-site
   ```

2. Navigate into the project directory:

   ```bash
   cd node-site
   ```

3. Install the required dependencies (if any):

   ```bash
   npm install
   ```

4. To start the server using nodemon (which will automatically restart your server on file changes), run:

   ```bash
   nodemon index.js
   ```

Once the server starts, you can open your browser and navigate to `http://localhost:8080` to access the main page. Use the endpoints `/about` and `/contact-me` to navigate to other pages. Any unlisted endpoint will lead you to the `404.html` page.

## Technologies

The following technologies were leveraged in the development of this project:

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Nodemon](https://nodemon.io/)

# User Session Management
An interactive user registration and login system built with MERN stack (MongoDB, Express.js, React, Node.js) that enables users to register, login, and access a map feature with click and drag, zoom, and location marking functionalities.

# Technologies
This project was created using:
* React
* Node
* Express
* MongoDB
* Google Maps API
* MUI Library

# Installation
To set up and run the project, you can follow these steps:
1. Clone the repository:
   ```
   $ git clone <repository-url>
   ```
3. Install dependencies
    ```
    $ cd client
    $ npm install
   ```
4. Start the development server:
5. ```
    $ npm start
   ```
6. Set up the backend server
   In a new terminal,
    ```
    $ npm install
   ```
7. Edit your mongoose connectionString in server.js
    ```
    const mongoose = require('mongoose');
    const connectionString = 'yourConnectionString';
   ```
8. Get Google Maps API Key and edit in Map Container.js
   ```
   <LoadScript googleMapsApiKey="yourkey">
   ```
7. Start the backend server
    ```
    $ npm start
   ```
# Usage
1. Open the application in your web browser.
2. Register a new user account with your desired credentials by filling out the registration form.
3. Log in using the registered username and password.
4. After successful login, you will be redirected to the map page.
5. Explore the map by clicking and dragging, zooming in/out, and clicking to mark locations.
6. Click on the logout button to manually log out from the session.

# Dummy User Credentials
For testing purposes, you can use the following dummy user credentials:

Username: John@123
Password: 12345

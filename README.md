# Node.js User Authentication API

This is a simple Node.js API for user authentication using JWT (JSON Web Tokens). It allows users to register, login, and retrieve user details.

## Features

- User registration with encrypted passwords
- User login with JWT authentication
- Retrieval of user details

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens)
- Bcrypt.js (for password hashing)
- dotenv (for environment variables)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/surya123866/user-auth-api.git

2.Install dependencies:cd nodejs-authentication-api
npm install
3.Set up environment variables:
Create a .env file in the root directory and add the following variables:
PORT=3000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

4.Run the server:node server.js

5.You can now access the API at http://localhost:3000.



API Endpoints
POST /api/register: Register a new user.
Required fields: name, email, password.
POST /api/login: Login with existing credentials.
Required fields: email, password.
GET /api/user: Get user details (requires authentication).
Usage
You can use tools like Postman or cURL to interact with the API endpoints.


# Example usage:

## Register a new user:
- Api: http://localhost:3000/api/register
- Headers : "Content-Type: application/json" 
- Body:'{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
- Response:{
  "_id": "someUserId",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "your_generated_jwt_token",
  "createdAt":"2024-04-26T11:29:04.698+00:00"
}



## Login with the registered user:
- Api: http://localhost:3000/api/users/login
- Headers: "Content-Type: application/json"
- Body: '{"email": "john@example.com", "password": "password123"}'
- SampleResponse:{
  "_id": "someUserId",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "your_generated_jwt_token"
}


## Retrieve user details:
- Api:  http://localhost:3000/api/users/profile
- Headers:"Content-Type: application/json" "Authorization: Bearer your_generated_jwt_token"
- SampleResponse: {
  "_id": "someUserId",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "your_generated_jwt_token"
}



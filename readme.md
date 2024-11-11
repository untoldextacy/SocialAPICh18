# MediaAPI - Social Network API

## Description

The MediaAPI is a backend API for a social network platform, built using MongoDB, Express.js, and Mongoose. The API allows users to create profiles, post thoughts, and interact with friends. It supports CRUD operations for users, thoughts, and friends, allowing users to add/remove friends and manage their thoughts and reactions.

## Features
- Create, update, and delete users
- View users and their thoughts
- Add and remove friends
- Manage thoughts with reactions (like/dislike)

## Technologies Used
- MongoDB: Database to store user data, thoughts, and friend relationships.
- Express.js: Web framework for building the RESTful API.
- Mongoose: MongoDB object modeling tool for handling database interactions.
- Postman: For testing API routes.

## Requirements
Node.js (v14 or higher)
MongoDB running locally or through a cloud service like MongoDB Atlas

## Installation

1) Clone the repository
```bash
git clone https://github.com/untoldextacy/SocialAPICh18.git
```

2) Install dependencies

Navigate to the project directory and run:

```bash
npm install
```

3) Start the server

To start the server and connect to MongoDB:

```bash
npm start
```

- By default, the server will run on http://localhost:3000.

# API Endpoints

Users

GET /api/users

Description: Retrieve all users.

Response: An array of user objects.

GET /api/users/:userId

Description: Retrieve a single user by ID, along with their thoughts and friends.

Response: A user object with thoughts and friends populated.
POST /api/users

Description: Create a new user.

Request Body:

```json
{
{
  "username": "string",
  "email": "string",
  "password": "string"
}
}
```
Response: The created user object.
PUT /api/users/:userId

Description: Update a user by ID.

Request Body:

```json

{
  "username": "newUsername",
  "email": "newEmail"
}
```

Response: The updated user object.
DELETE /api/users/:userId

Description: Delete a user by ID and their associated thoughts.
Response: A message confirming user deletion.

Friends

POST /api/users/:userId/friends/:friendId

Description: Add a friend to a user's friend list.

Response: The updated user object.

DELETE /api/users/:userId/friends/:friendId

Description: Remove a friend from a user's friend list.

Response: The updated user object.

Response: The created thought object.
DELETE /api/thoughts/:thoughtId

Description: Delete a thought by ID.

Response: A message confirming thought deletion.


## Testing with Postman
Use Postman to test the API by making GET, POST, PUT, and DELETE requests.
Import the Postman collection from the MediaAPI repository for quick testing.

## Demostration
[Video](https://youtu.be/LEyS_IQy5ls)

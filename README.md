```markdown
# Node.js Authentication API

This is a Node.js authentication API using MongoDB, Passport.js, and JWT (JSON Web Tokens) for user authentication and authorization.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

```bash
git clone [https://github.com/yourusername/your-repo.git](https://github.com/swapthedude9423/passport-authentication.git)
```

2. Navigate to the project directory:

```bash
cd your-repo
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root directory and set the following environment variables:

```
MONGODB_USERNAME=your-mongodb-username
MONGODB_PASSWORD=your-mongodb-password
CLUSTER_URL=your-mongodb-cluster-url
SECRET_KEY=your-secret-key
```

### Usage

1. Start the MongoDB server:

```bash
mongod
```

2. Start the Node.js application:

```bash
npm start
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## API Endpoints

- `POST /signup`: Create a new user account.
- `POST /login`: Authenticate and receive a JWT token.
- `GET /user/profile`: Get the user profile (protected route).
- `GET /user/logout`: Log out and invalidate the token (protected route).

## Built With

- Node.js - JavaScript runtime for server-side development
- MongoDB - NoSQL database for data storage
- Express.js - Web application framework for Node.js
- Passport.js - Authentication middleware for Node.js
- JSON Web Tokens (JWT) - Authentication method
- Mongoose - MongoDB object modeling for Node.js

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


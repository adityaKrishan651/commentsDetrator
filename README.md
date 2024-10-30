# Comments Detection System

This is a real-time comments system project built with Next.js (front-end) and Node.js (back-end). The project uses Socket.IO for real-time updates and SQLite as the database.

## Project Structure

- `client/`: Contains the Next.js front-end application.
  - `app/`: Contains pages for comments and login.
- `server/`: Contains the Node.js back-end server.
  - `database.js`: SQLite database setup and connection.
  - `server.js`: Express server setup with Socket.IO for real-time updates.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SQLite

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adityaKrishan651/commentsDetrator.git
cd commentsDetrator
```

### 2. Set-Up the Client
1. Navigate to the ```client``` directory
```bash
cd client/
```

2. Install the Dependencies
```bash
npm install
```

3. Run the Development Server
```bash
npm run dev
```

. The client should now be running on ```http://localhost:3000/```

### 3. Setup the Server
1. Open a new terminal window and navigate to the ```server``` directory
```bash
cd server/
```
2. Install the Dependencies
```bash
npm install
```
3. Start the Server
```bash
node server.js
```
### 3. Database Setup
This project uses SQLite, and the database connection is configured in server/database.js. No additional setup is required as the SQLite database file will be generated automatically when the server starts.

### 4. Usage
1. Open ```http://localhost:3000``` in your browser.
2. Log in by entering a username on the login page.
3. Post comments and view them in real-time on the comments page.

### 5. Notes
Ensure that both the client (front-end) and server (back-end) are running simultaneously for the full functionality.
If you encounter issues with ports already in use, modify the port numbers in server.js and next.config.js as needed.


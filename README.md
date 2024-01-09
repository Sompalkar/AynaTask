# Ayna Library API

## Overview

Ayna Library API is a Node.js-based backend for managing books and authors. It provides various endpoints to interact with the library, including authentication, retrieving authors, and managing books.

## Architecture Diagram

The Ayna Library API follows a typical three-tier architecture:

1. **Client Tier:**
   - Represents the client-side application, such as a web or mobile interface.
   - Interacts with the API through HTTP requests.

2. **Application Tier (Node.js Server):**
   - Handles incoming HTTP requests and manages the application logic.
   - Utilizes Express.js as the web application framework.
   - Implements routes for user authentication, author management, and book operations.
   - Communicates with the Data Tier to retrieve or update information.

3. **Data Tier (MongoDB):**
   - MongoDB is used as the database to store user information, author details, and book data.
   - Collections:
     - `users` collection for storing user details.
     - `authors` collection for managing author information.
     - `books` collection for storing book-related data.

   Client <--> Node.js Server <--> MongoDB



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
 
## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB installed and running

### Installation

```bash
# Clone the repository
git clone https://github.com/Sompalkar/aynaTask.git
 

# Install dependencies
npm install

# Start the Server
 node server.js
```

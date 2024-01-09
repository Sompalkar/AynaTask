const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const dotenv = require('dotenv');
const { faker } = require('@faker-js/faker')
const User = require('./models/user.js')
const Book = require('./models/bookModel.js')


dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


 
// Create mock data for users
const createMockData = async () => {
  try {
    const userCount = await User.countDocuments();

    if (userCount === 0) {
      await User.deleteMany();
      await Book.deleteMany();

      const users = Array.from({ length: 5 }, () => {
        return new User({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        });
      });

      const createdUsers = await User.create(users);

      console.log(createdUsers);

      const books = createdUsers.map(user => {
        return new Book({
          title: faker.lorem.words(3),
          author: user._id,
        });
      });

      await Book.create(books);
      console.log('Mock data created successfully!');
    } else {
      console.log('Mock data already exists. Skipping creation.');
    }
  } catch (error) {
    console.error('Error creating mock data:', error);
  }
};

createMockData();




// Routes
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', authorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

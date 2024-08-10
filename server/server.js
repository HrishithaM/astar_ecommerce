const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files for images
app.use('/Assets', express.static(path.join(__dirname, 'Assets')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Connect to MongoDB
mongoose.connect("mongodb+srv://hrishitham:SnoyeeIsTheBest@cluster0.njd8lyn.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});


// Define routes
app.use('/api/products', productRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const cors = require('cors');
const path = require('path'); // Require the path module
const userDataRoutes = require('./routes/userData');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "*" // Allow all origins
}));

// Define your API routes before serving static files
app.use('/', userDataRoutes);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

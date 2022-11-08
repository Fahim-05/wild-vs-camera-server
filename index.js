const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cots());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wild-Photographer server is running!')
})

app.listen(port, () => {
    console.log(`Wild-Photographer server is running on ${port}`);
})
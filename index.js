const express = require('express');
const cors = require('cors');
const app = express();

// middlewares
app.use(cots());
app.use(express.json());


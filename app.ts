const express = require('express');
const errorHandler = require('./errorHandlingMiddleware');

const app = express();

// ... other middleware and route setup ...

// Use the error handler middleware
app.use(errorHandler);

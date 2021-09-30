const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

// initialize env
dotenv.config();

// initialize express
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// connect the db
connectDb();

app.use('/api', (req, res, next) => {
    res.status(200).json({
        result: {
            message: 'API is working!',
        },
    });
});

app.use((req, res, next) => {
    const error = new Error();
    error.message = 'Route not Found!';
    next(error);
});

app.use((error, req, res, next) => {
    res.status(500).json({
        error: {
            message: error.message,
        },
    });
});

// initialize app
app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT: ${process.env.PORT}`);
});

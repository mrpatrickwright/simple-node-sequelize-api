require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');

const artistRouter = require('./route/artistRoute');
const playlistTrackRouter = require('./route/playlistTrackRoute');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());

// routes
app.use('/api/v1/artists', artistRouter);
app.use('/api/v1/playlistTracks', playlistTrackRouter);

app.use(
    '*',
    catchAsync(async (req, res, next) => {
        throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});

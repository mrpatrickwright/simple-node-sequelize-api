const sequelize = require('../config/database');
var initModels = require("../db/models/init-models");
models = initModels(sequelize);

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAllPlaylistTrack = catchAsync(async (req, res, next) => {
    const result = await models.PlaylistTrack.findAll();

    return res.json({
        status: 'success',
        data: result,
    });
});

const getPlaylistTrackById = catchAsync(async (req, res, next) => {
    const playlistId = req.params.playlistId;
    const trackId = req.params.trackId;
    const result = await models.PlaylistTrack.findOne({
        where: {
            playlistId: playlistId,
            trackId: trackId
        }
    });
    if (!result) {
        return next(new AppError('Invalid PlaylistTrack id', 400));
    }
    return res.json({
        status: 'success',
        data: result,
    });
});


const updatePlaylistTrack = catchAsync(async (req, res, next) => {
    const playlistId = req.params.playlistId;
    const trackId = req.params.trackId;
    const body = req.body;
    const result = await models.PlaylistTrack.findOne({
        where: {
            playlistId: playlistId,
            trackId: trackId
        }
    });
    if (!result) {
        return next(new AppError('Invalid PlaylistTrack id', 400));
    }

    result.playlist_id = body.playlistId;
    result.track_id = body.trackId;

    const updatedResult = await result.save();

    return res.json({
        status: 'success',
        data: updatedResult,
    });
});

const deletePlaylistTrack = catchAsync(async (req, res, next) => {

    const playlistId = req.params.playlistId;
    const trackId = req.params.trackId;

    const result = await models.PlaylistTrack.findOne({
        where: {
            playlistId: playlistId,
            trackId: trackId
        }
    });
    if (!result) {
        return next(new AppError('Invalid PlaylistTrack id', 400));
    }

    await result.destroy();

    return res.json({
        status: 'success',
        message: 'Record deleted successfully',
    });
});

const createPlaylistTrack = catchAsync(async (req, res, next) => {
    const body = req.body;

    const newPlaylistTrack = await models.PlaylistTrack.create({
        playlistId: body.playlistId,
        trackId: body.trackId,

    });

    return res.status(201).json({
        status: 'success',
        data: newPlaylistTrack,
    });
});
module.exports = {
    getAllPlaylistTrack,
    getPlaylistTrackById,
    updatePlaylistTrack,
    createPlaylistTrack,
    deletePlaylistTrack
}
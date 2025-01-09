import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    // -1 -> Descending
    //  1 -> Ascending
    const songs = await Song.find().sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (error) {
    console.log("Error geting all songs");
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // fetch 6 random song using mongoDB aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: {
          size: 6,
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    // fetch 4 random song using mongoDB aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: {
          size: 4,
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    // fetch 6 random song using mongoDB aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: {
          size: 6,
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};
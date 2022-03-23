import Video from "../models/video.model.js";
import Note from "../models/note.model.js";
import {youtubeId} from "../utils/video/video.js";

//Get videos
export const getVideos = async id => {
    try{
        const videos = await Video.find({user: id}, 'title thumbnail').sort({createdAt: -1});

        return videos;
    }catch(error){
        throw new Error(error);
    }
}

//Create video
export const createVideo = async (data, id, thumbnail) => {
    try{
        const videoId = youtubeId(data.url);

        const newVideo = await Video.create({...data, user: id, url: videoId, thumbnail: thumbnail});

        return newVideo;
    }catch(error){
        throw new Error(error);
    }
}

//Delete video
export const deleteVideo = async id => {
    try{
        await Video.findByIdAndDelete(id);
        await Note.deleteMany({video: id});

        return 'Video deleted';
    }catch(error){
        throw new Error(error);
    }
}

//Get video
export const getVideo = async id => {
    try{
        const video = await Video.findOne({_id: id});

        return video;
    }catch(error){
        throw new Error(error);
    }
}
import {
    getVideos,
    createVideo,
    deleteVideo,
    getVideo,
} from "../services/video.service.js";

import {
    createVideoValidation,
} from "../validation/video.validation.js";

import { isYoutubeUrl } from "../utils/video/video.js";
import youtubeThumbnail from 'youtube-thumbnail';

export const fetchVideos = async (req, res) => {
    const {id} = res.locals.user;

    try{
        //Fetching users videos
        const videos = await getVideos(id);

        return res.status(200).json(videos);
    }catch(error){
        throw new Error(error);
    }
}

export const createAVideo = async (req, res) => {
    const {id} = res.locals.user;
    const {url} = req.body;

    try{
        //Validation
        const { error } = createVideoValidation(req.body);
        if (error?.details.length > 0) return res.status(422).json({ validation: error.details });
    
        //Checking if the youtube URL is correct
        if(!isYoutubeUrl(url)) return res.status(422).json({url: 'The youtube url you entered is not valid'});
        
        //Get the youtube video thumbnail
        const thumbnail = youtubeThumbnail(req.body.url);

        //Create video
        const newVideo = await createVideo(req.body, id, thumbnail.default.url);

        return res.status(201).json(newVideo);
    }catch(error){
        throw new Error(error);
    }
}

export const removeVideo = async (req, res) => {
    const {id} = req.params;

    try{
        //Deleting video
        await deleteVideo(id);

        return res.status(204).json('Video has been deleted.');
    }catch(error){
        throw new Error(error);
    }
}

export const fetchVideo = async (req, res) => {
    const {id} = req.params;

    try{
        //Fetching certain video
        const video = await getVideo(id);

        return res.status(200).json(video);
    }catch(error){
        throw new Error(error);
    }
}
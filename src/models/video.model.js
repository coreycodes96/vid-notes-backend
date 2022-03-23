import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    thumbnail: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => new Date(),
    }
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
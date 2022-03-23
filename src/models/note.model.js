import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    video: {
        type: mongoose.Types.ObjectId,
        ref: 'Video',
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    time: {
        type: Number,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => new Date(),
    }
});

export default mongoose.model('Note', noteSchema);
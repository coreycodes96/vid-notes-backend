import Note from "../models/note.model.js";

//Getting notes
export const getNotes = async id => {
    try{
        const notes = await Note.find({video: id}).sort({createdAt: -1});

        return notes;
    }catch(error){
        throw new Error(error);
    }
}

//Create note
export const createNote = async (data, id) => {
    try{
        const newNote = await Note.create({...data, user: id});

        return newNote;
    }catch(error){
        throw new Error(error);
    }
}

//Delete note
export const deleteNote = async id => {
    try{
        await Note.findByIdAndDelete(id);

        return 'Note deleted';
    }catch(error){
        throw new Error(error);
    }
}
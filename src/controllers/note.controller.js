import {
    getNotes,
    createNote,
    deleteNote
} from "../services/note.service.js";

import { createNoteValidation } from "../validation/note.validation.js";

export const fetchNotes = async (req, res) => {
    const {id} = req.params;

    try{
        //Fetching video notes
        const notes = await getNotes(id);
        
        return res.status(200).json(notes);
    }catch(error){
        throw new Error(error);
    }
}

export const createANote = async (req, res) => {
    const {id} = res.locals.user;

    try{
        //Validation
        const { error } = createNoteValidation(req.body);
        if (error?.details.length > 0) return res.status(422).json({ validation: error.details });
        
        //Create note
        const newNote = await createNote(req.body, id);

        return res.status(201).json(newNote);
    }catch(error){
        throw new Error(error);
    }
}

export const removeNote = async (req, res) => {
    const {id} = req.params;

    try{
        //Deleting note
        await deleteNote(id);

        return res.status(204).json('Note deleted');
    }catch(error){
        throw new Error(error);
    }
}
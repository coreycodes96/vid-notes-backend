import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {deleteNote} from "../../../services/note.service.js";

describe("Delete Note", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should delete a note", done => {
        const id = "623122647a32385002096de5";

        deleteNote(id)
        .then(res => {
            expect(res).toEqual('Note deleted');
            done();
        })
        .catch(error => done(error))
    })
})
import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {createNote} from "../../../services/note.service.js";

describe("Create Note", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should create note", done => {
        const id = "623122647a32385002096de5";
        const videoId = "62312986188204195a29eb0d";

        const note = {
            video: videoId,
            title: "Test Title",
            body: "Test Body",
            time: 2033,
        };

        createNote(note, id)
        .then(res => {
            expect(res).toHaveProperty('_id');
            expect(res).toHaveProperty('video');
            expect(res).toHaveProperty('body');
            expect(res).toHaveProperty('time');
            done();
        })
        .catch(error => done(error))
    })
})
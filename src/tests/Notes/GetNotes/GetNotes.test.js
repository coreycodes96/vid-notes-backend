import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {getNotes} from "../../../services/note.service.js";

describe("Get Notes", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should get all the video notes", done => {
        const id = "623122647a32385002096de5";

        getNotes(id)
        .then(res => {
            expect(res).toEqual([]);
            done();
        })
        .catch(error => done(error))
    })
})
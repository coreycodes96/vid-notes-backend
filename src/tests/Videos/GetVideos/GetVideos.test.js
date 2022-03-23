import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {getVideos} from "../../../services/video.service.js";

describe("Get Videos", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should get all the users videos", done => {
        const id = "623122647a32385002096de5";

        getVideos(id)
        .then(res => {
            expect(res).toEqual([]);
            done();
        })
        .catch(error => done(error))
    })
})
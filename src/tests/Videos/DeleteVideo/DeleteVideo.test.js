import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {deleteVideo} from "../../../services/video.service.js";

describe("Delete Video", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should delete a video", done => {
        const id = "623122647a32385002096de5";

        deleteVideo(id)
        .then(res => {
            expect(res).toEqual('Video deleted');
            done();
        })
        .catch(error => done(error))
    })
})
import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {createVideo} from "../../../services/video.service.js";

describe("Create Video", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should create a video", done => {
        const id = "623122647a32385002096de5";

        const video = {
            title: "Test",
            url: "https://www.youtube.com/watch?v=tPEE9ZwTmy0",
        };

        const thumbnail = "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png";

        createVideo(video, id, thumbnail)
        .then(res => {
            expect(res).toHaveProperty('_id');
            expect(res).toHaveProperty('title');
            expect(res).toHaveProperty('thumbnail');
            expect(res).toHaveProperty('url');
            done();
        })
        .catch(error => done(error))
    })
})
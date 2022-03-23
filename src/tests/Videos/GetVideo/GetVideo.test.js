import {
    connect,
    clearDatabase,
    closeDatabase,
} from "../../db-handler.js";

import {getVideo} from "../../../services/video.service.js";

describe("Get Video", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should get a certain video", done => {
        const id = "623122647a32385002096de5";

        getVideo(id)
        .then(res => {
            expect(res).toEqual(null);
            done();
        })
        .catch(error => done(error))
    })
})
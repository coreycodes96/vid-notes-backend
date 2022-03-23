import {
    connect,
    closeDatabase,
    clearDatabase,
} from "../../db-handler.js";

import {loginUser} from "../../../services/user.service.js";

describe("Login", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());

    test("should login the user", done => {
        const username = 'Test';

        loginUser(username)
        .then(res => {
            expect(res).toBe(null);
            done();
        })
        .catch(error => done(error))
    })
})
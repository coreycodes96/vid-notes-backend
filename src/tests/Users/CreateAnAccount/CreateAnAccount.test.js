import {connect, closeDatabase, clearDatabase} from "../../db-handler.js";
import {createAccount} from "../../../services/user.service.js";

describe("Create An Account", () => {
    //Connect
    beforeAll(async () => await connect());

    //Clear database
    afterEach(async () => await clearDatabase());

    //Close database
    afterAll(async () => await closeDatabase());
    
    test("should create an account for the user", done => {
        createAccount({username: 'Test', password: '1234'})
        .then(res => {
            expect(res).toHaveProperty('_id');
            expect(res).toHaveProperty('username');
            expect(res).toHaveProperty('password');
            done();
        })
        .catch(error => done(error))
    })
});
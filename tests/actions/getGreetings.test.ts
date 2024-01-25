import { GetGreetings } from "../../src/actions/getGreetings";
import { FakeRepo } from "./fakeRepository";

describe("getGreetings", () => {
    it("should return valid message", async () => {
        const expectedMessage = "Hello"
        const greetingsMessageRepository = new FakeRepo(expectedMessage);
        const getGreetings = new GetGreetings(greetingsMessageRepository)

        const result = await getGreetings.run("en")

        expect(result).toBeDefined()
        expect(result.message).toBe("Hello")
    })
})


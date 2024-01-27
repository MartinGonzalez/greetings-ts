import { mock, instance, when, verify } from 'ts-mockito';
import { GetGreetings } from "../../src/actions/getGreetings";
import { GreetingsMessageRepository } from '../../src/domain/repositories/greetingsMessageRepository';
import { GreetingsMessage } from "../../src/domain/greetingsMessage";

describe("getGreetings", () => {

    let greetingsMessageRepository: GreetingsMessageRepository
    let getGreetings : GetGreetings

    beforeEach(() => {
        greetingsMessageRepository = mock<GreetingsMessageRepository>()
        getGreetings = new GetGreetings(instance(greetingsMessageRepository))
    })

    it("should return valid greetings when language is supported", async () => {
        const expectedMessage = "Hello"
        when(greetingsMessageRepository.supports("en")).thenReturn(Promise.resolve(true))
        when(greetingsMessageRepository.get("en")).thenReturn(Promise.resolve(new GreetingsMessage(expectedMessage)))
    
        const result = await getGreetings.run("en")

        expect(result).toBeDefined()
        expect(result.message).toBe(expectedMessage)
    })

    it("should return default greetings when language is not supported", async () => {
        const expectedMessage = "Hello"
        const notSupportedLanguage = "pt";

        when(greetingsMessageRepository.supports(notSupportedLanguage)).thenReturn(Promise.resolve(false))
        when(greetingsMessageRepository.get("en")).thenReturn(Promise.resolve(new GreetingsMessage(expectedMessage)))
    
        const result = await getGreetings.run(notSupportedLanguage)

        expect(result).toBeDefined()
        expect(result.message).toBe(expectedMessage)
    })
})


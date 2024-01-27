import { GetGreetings } from "../getGreetings";
import { InMemoryGreetingsRepository } from "../../../infrastructure/inMemoryGreetingsRepository";


export function createGetGreetings(): GetGreetings {
    const greetingsMessageRepository = new InMemoryGreetingsRepository()
    return new GetGreetings(greetingsMessageRepository)
}
import { GreetingsMessageRepository } from "../domain/repositories/greetingsMessageRepository"
import { Greetings } from "../domain/greetings"

export class GetGreetings {

    private greetingsRepository: GreetingsMessageRepository

    constructor(greetingsRepository: GreetingsMessageRepository) {
        this.greetingsRepository = greetingsRepository
    }

    async run(language: string): Promise<Greetings> {
        return await this.greetingsRepository
            .get(language)
            .then(message => new Greetings(message))
    }
}



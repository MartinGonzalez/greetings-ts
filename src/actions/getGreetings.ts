import { GreetingsMessageRepository } from "../domain/repositories/greetingsMessageRepository"
import { Greetings } from "../domain/greetings"
import { GreetingsMessage } from "../domain/greetingsMessage"

export class GetGreetings {

    private greetingsRepository: GreetingsMessageRepository

    constructor(greetingsRepository: GreetingsMessageRepository) {
        this.greetingsRepository = greetingsRepository
    }

    async run(language: string): Promise<Greetings> {
        return await this.resolveLanguage(language)
            .then(resolvedLanguage => this.getGreetingMessageFor(resolvedLanguage))
            .then(greetingMessage => new Greetings(greetingMessage))
    }

    private async resolveLanguage(language: string): Promise<string>{
        return await this.greetingsRepository
        .supports(language)
        .then(isSupported => isSupported ? language : "en")
    }

    private async getGreetingMessageFor(language: string): Promise<GreetingsMessage> {
        return await this.greetingsRepository.get(language)
    }
}



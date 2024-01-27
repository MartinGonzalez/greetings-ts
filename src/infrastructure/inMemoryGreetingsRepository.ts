import { GreetingsMessageRepository } from "../core/domain/repositories/greetingsMessageRepository";
import { GreetingsMessage } from "../core/domain/greetingsMessage";

export class InMemoryGreetingsRepository implements GreetingsMessageRepository {

     greetings: { [key: string]: string[] } = {
        en: [
            "Hello!",
            "Good day!",
            "Nice to meet you!",
            "How are you?",
            "Great to see you!"
        ],
        es: [
            "¡Hola!",
            "¡Buenos días!",
            "¡Mucho gusto!",
            "¿Cómo estás?",
            "¡Es un placer verte!"
        ],
        it: [
            "Ciao!",
            "Buon giorno!",
            "Piacere di conoscerti!",
            "Come stai?",
            "È un piacere vederti!"
        ]
    }

    get(language: string): Promise<GreetingsMessage> {
        const languageCollection = this.getLanguageCollection(language)
        const message = this.getRandomMessageFrom(languageCollection)
        return Promise.resolve(new GreetingsMessage(message))
    }

    private getLanguageCollection(language: string): Array<string> {
        if(!this.greetings[language]){
            return this.greetings.en;
        }

        return this.greetings[language]
    }

    private getRandomMessageFrom(languageCollection: Array<string>): string {
        const randomIndex = Math.floor(Math.random() * languageCollection.length)
        return languageCollection[randomIndex]
    }

    supports(language: string): Promise<Boolean> {
        const isSupported = Boolean(this.greetings[language])
        return Promise.resolve(isSupported)
    }
}

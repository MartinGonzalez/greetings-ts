import { GreetingsMessage } from '../greetingsMessage';

export interface GreetingsMessageRepository {
    get(language: string): Promise<GreetingsMessage>
    supports(language: string): Promise<Boolean>
}
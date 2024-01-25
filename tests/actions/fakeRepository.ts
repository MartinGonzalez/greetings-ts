import { GreetingsMessage } from "../../src/domain/greetingsMessage";
import { GreetingsMessageRepository } from "../../src/domain/repositories/greetingsMessageRepository";


export class FakeRepo implements GreetingsMessageRepository {

    private defaultMessage: string;

    constructor(defaultMessage: string) {
        this.defaultMessage = defaultMessage;
    }

    get(language: string): Promise<GreetingsMessage> {
        return Promise.resolve(new GreetingsMessage(this.defaultMessage));
    }

}

import { GreetingsMessage } from "../../src/core/domain/greetingsMessage";
import { GreetingsMessageRepository } from "../../src/core/domain/repositories/greetingsMessageRepository";


export class FakeRepo implements GreetingsMessageRepository {

    private defaultMessage: string;

    constructor(defaultMessage: string) {
        this.defaultMessage = defaultMessage;
    }

    get(language: string): Promise<GreetingsMessage> {
        return Promise.resolve(new GreetingsMessage(this.defaultMessage));
    }

}

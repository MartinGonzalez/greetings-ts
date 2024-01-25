import { GreetingsMessage } from "./greetingsMessage";

export class Greetings {

    constructor(private greetingMessage: GreetingsMessage) { 
    }

    get message() {
        return this.greetingMessage.value  
    }
}
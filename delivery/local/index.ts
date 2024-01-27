import { GetGreetings } from '../../src/actions/getGreetings'
import { InMemoryGreetingsRepository } from '../../src/infrastructure/inMemoryGreetingsRepository'

const getGreetings = new GetGreetings(new InMemoryGreetingsRepository())

getGreetings
    .run("en")
    .then(greetings => console.log(greetings.message))
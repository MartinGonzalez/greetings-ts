import { GetGreetings } from './actions/getGreetings'
import { InMemoryGreetingsRepository } from './infrastructure/inMemoryGreetingsRepository'

const getGreetings = new GetGreetings(new InMemoryGreetingsRepository())

getGreetings
    .run("en")
    .then(greetings => console.log(greetings.message))
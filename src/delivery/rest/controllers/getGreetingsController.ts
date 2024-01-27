import express, { Request, Response } from 'express'
import { createGetGreetings } from '../../../core/actions/factories/actionFactory'

export class GetGreetingsController {
    public router = express.Router()

    constructor(){
        this.router.get("/:language", this.getGreetings)
    }

    getGreetings = async (req: Request, res: Response) => {
        const { language } = req.params
        const getGreetings = createGetGreetings()
    
        try {
            const greetings = await getGreetings.run(language)
            res.status(200)
                .json({ message: greetings.message })
    
        } catch (error) {
            res.status(500)
                .json({ error: 'Internal server error' })
        }
    }
}
import { NextFunction, Request, Response } from "express";

export default function logRequests(req: Request, res: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);

    console.log(`Params: ${JSON.stringify(req.params)}`);
    // Log URL parameters
    if (Object.keys(req.params).length > 0) {
        console.log(`Params: ${JSON.stringify(req.params)}`);
    }

    // Log query parameters
    if (Object.keys(req.query).length > 0) {
        console.log(`Query: ${JSON.stringify(req.query)}`);
    }

    next(); // Pass control to the next middleware function
}
import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        status: true,
        message: 'Hello World'
    });
});

app.listen(5000, () => {
    console.log(`Server Started on port 5000`);
});
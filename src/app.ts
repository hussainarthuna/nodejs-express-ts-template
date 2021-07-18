import express, {Application, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        status: true,
        message: 'Hello World',
    });
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});

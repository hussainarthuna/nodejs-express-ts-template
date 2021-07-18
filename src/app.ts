import express, {Application, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";

dotenv.config();

// App Variables
const port = process.env.PORT;
const app: Application = express();

// App Configuration
app.use(cors());
app.use(helmet());
app.get('/', (req: Request, res: Response) => {
    res.json({
        status: true,
        message: 'Hello World',
    });
});

// Server And Database Configuration
app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});

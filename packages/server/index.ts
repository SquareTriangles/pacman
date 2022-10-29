import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet';
import express from 'express'

import { dbConnect } from './db'
import initRoutes from './routes'
import { handleErrorMiddleware, joiHandleError, consoleLogger } from './middlewares';

dotenv.config()

const port = Number(process.env.SERVER_PORT) || 3001

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(consoleLogger)

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');


dbConnect()

initRoutes(app);

app.use(joiHandleError)

app.use(handleErrorMiddleware)

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})



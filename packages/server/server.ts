import dotenv from 'dotenv'

import path from 'path'

dotenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'


import { handleErrorMiddleware, joiHandleError, consoleLogger } from './middlewares';
import initRoutes from './routes'
import cors from 'cors'
import { dbConnect } from './db'
import helmet from 'helmet'
import renderMiddleware from './middlewares/renderMiddleware'

const app = express()

const corsConfig = {
    origin: true,
    credentials: true,
  };
  
  app.use(consoleLogger)
  
  app.use(cors(corsConfig))
  app.options('*', cors(corsConfig));
  
  app.use(cookieParser())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet({ contentSecurityPolicy: false, }));
  app.disable('x-powered-by');

  
  dbConnect()

  initRoutes(app);

  
app.use(express.static(path.resolve(__dirname, '../../client/dist')))
console.log(__dirname)

app.get('*',  renderMiddleware);
  
app.use(joiHandleError)
  
app.use(handleErrorMiddleware)
export default app 

import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import authRouter from './routes/authRoute.js';
import personRouter from './routes/personRoute.js'

const app = express()

const APP_URL = 'https://ceylon-tea-client.vercel.app/'

app.use(cors({
  origin: APP_URL,
  credentials: true
}));

app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/person',personRouter)

const PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
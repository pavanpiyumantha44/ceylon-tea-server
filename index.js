import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import authRouter from './routes/authRoute.js';
import personRouter from './routes/personRoute.js'

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/person',personRouter)

const PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
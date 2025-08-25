import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import authRouter from './routes/authRoute.js';
import personRouter from './routes/personRoute.js'
import aiResponseRouter from './routes/aiResponseRoute.js'
import teamsRouter from './routes/teamRoute.js'

const app = express()

const APP_URL = 'http://localhost:5173'

app.use(cors({
  origin: APP_URL,
  credentials: true
}));

app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/person',personRouter);
app.use('/api/ai',aiResponseRouter);
app.use('/api/teams',teamsRouter)

const PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
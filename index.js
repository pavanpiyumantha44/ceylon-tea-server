import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import authRouter from './routes/authRoute.js';
import personRouter from './routes/personRoute.js'
import aiResponseRouter from './routes/aiResponseRoute.js'
import teamsRouter from './routes/teamRoute.js'
import placeRouter from './routes/placeRoute.js'
import stockRouter from './routes/stockRoute.js'
import stockTransactionsRouter from './routes/stockTransactionsRoute.js'
import attendanceRouter from './routes/attendanceRoute.js'
import teaPluckingRouter from './routes/teaPluckingRoute.js'
import summaryRouter from './routes/summaryRoute.js'

const app = express()

//const APP_URL = process.env.APP_URL
const APP_URL = 'https://ceylon-tea-client.vercel.app'

app.use(cors({
  origin: APP_URL,
  credentials: true,
  methods:['POST','GET','PUT','DELETE']
}));

app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/person',personRouter);
app.use('/api/ai',aiResponseRouter);
app.use('/api/teams',teamsRouter);
app.use('/api/places',placeRouter);
app.use('/api/stock',stockRouter);
app.use('/api/stockTransactions',stockTransactionsRouter);
app.use('/api/attendance',attendanceRouter);
app.use('/api/teaPlucking',teaPluckingRouter);
app.use('/api/summary',summaryRouter);

const PORT = process.env.PORT || 8080;



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
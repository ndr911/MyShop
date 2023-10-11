import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'


const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)


app.use(errorHandler)
app.listen(5000, console.log('Server is running on port 5000.'))
import express from 'express';
import postRoutes from './routes/projectRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';






const app = express();

if (process.env.NODE_ENV !== 'production') {
 dotenv.config()
}





app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

// app.use(express.json())


app.use('/', postRoutes)

app.use('/', authRoutes)



const PORT = process.env.PORT ;



 const server = app.listen(PORT, ()=>console.log('listening on port ' , PORT))







// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
      process.exit(1);
    });
  });

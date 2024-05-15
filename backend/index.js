import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
// import db from "./config/Database.js"

// bikin error
import UserRoute from './routes/UserRoute.js'
import ProductRoute from "./routes/ProductRoute.js"
import AuthRoute from "./routes/AuthRoute.js"

// Load environment variabel
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Logging middleware to debug request body
app.use((req, res, next) => {
    console.log(`Request Body: `, req.body);
    next();
});

// bikin error
// function asyns
// (async () => {
//     try {
//       await db.sync();
//       console.log('Database aman bosss');
//     } catch (error) {
//       console.error('Failed to synchronize database:', error);
//     }
//   })();

// midleware for session
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

// midleware for CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

// midleware to parse JSON
app.use(express.json());

// bikin error
// Routes
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...')
})
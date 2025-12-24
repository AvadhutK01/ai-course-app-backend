import express, { Express } from 'express';
import { connectDB } from './utils/db';
import cors from 'cors';
import session from 'express-session';
import passport from './utils/passport';
import authRoutes from './routes/authRoutes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

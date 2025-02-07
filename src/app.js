import express from 'express';
import db from './db/index.js';
import controller from './controller/index.js';
import middleware from './middleware/index.js';
import cors from 'cors';

const { userController } = controller;
const { userMiddleware } = middleware;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post(
    '/user/signup',
    userMiddleware.checkEmailAlreadyExist,
    userMiddleware.checkUserNameAlreadyExist,
    userController.signUp,
);

app.post(
    '/user/login',
    userMiddleware.checkEmailPassword,
    userController.login,
);



const services = () => {
    db.then(() => {
        console.log('Database connected...');
    }).catch((err) => {
        console.log('error is happen in db connectivity', err);
    })
}

app.listen(5000, () => {
    services();
    console.log('Server started on port 5000');
});

export default app;
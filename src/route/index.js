import userRouter from './user.js';

const register = (app) => {
    app.use('/api', [
        ...userRouter(),
    ])
}

export default register;
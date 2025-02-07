import express from 'express';

const router = express.Router();

router.post('/signup', () => {
    console.log('signup api is trigger...');   
});

export default router;
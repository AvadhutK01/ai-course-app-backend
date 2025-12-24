import { Router } from 'express';
import { googleAuth, googleAuthCallback, logout, getProfile } from '../controller/authController';
import passport from 'passport';

const router = Router();

router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), googleAuthCallback);
router.get('/profile', getProfile);
router.get('/logout', logout);

export default router;

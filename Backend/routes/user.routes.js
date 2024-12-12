const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/user.controller');
const authMiddleware=require('../middlewares/auth.middleware')
router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should have atleast 3 character"),
    body('password').isLength({min:6}).withMessage('Password must have atleast 6 character'),
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must have atleast 6 character')
],loginUser)

router.get('/profile',authMiddleware.authUser,getUserProfile)
router.get('/logout',authMiddleware.authUser,logoutUser);


module.exports=router;
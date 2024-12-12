const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const { registerCaptain, loginCaptain, getCaptainProfile, logOut } = require('../controllers/captain.controller');
const { authCaptain } = require('../middlewares/auth.middleware');
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body("fullname.firstname").isLength({min:3}).withMessage('First name must be atleast 3'),
    body("password").isLength({min:3}).withMessage('password  must be atleast 3'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capactiy must be atleast 3'),
    body('vehicle.vehicleType').isIn(['car','auto','motocycle']).withMessage("Invalid"),
],registerCaptain)
router.post('/login',[
   body('email').isEmail().withMessage("Invalid Email"),
   body('password').isLength({min:6}).withMessage('password must be atleast 3 character')
],loginCaptain)
router.get('/profile',authCaptain,getCaptainProfile)
router.get('/logout',authCaptain,logOut)
module.exports=router;
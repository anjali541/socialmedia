const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res,)=> {
  res.render('index', { title: "index | SocialMedia",user: req.user });
});
router.get('/about',(req, res,) =>{
  res.render('about', { title: "About | SocialMedia",user: req.user});
});
router.get('/contact', (req, res,) =>{
  res.render("contact", { title: "Contact | SocialMedia",user: req.user });
});
router.get('/register', (req, res, ) =>{
  res.render('register', { title: "Register | SocialMedia",user: req.user });
});

router.get('/login', (req, res,) =>{
  res.render('login', { title: "login | SocialMedia",user: req.user });
});
router.get("/forget-email", (req, res) => {
  res.render("forgetemail", {
      title: "Forgot Password  | SocialMedia",
      user: req.user,
  })
  });

  
router.get("/verify-otp/:id", (req, res) => {
  res.render("forgetOTP", {
      title: "Verify OTP  | SocialMedia",
      user: req.user,
      id: req.params.id,
  });
});


module.exports = router;

// 26/6/24


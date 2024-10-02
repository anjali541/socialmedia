const nodemailer = require ("nodemailer");

exports.sendMail  = async (req,res,user) =>{
 
const OTP = Math.floor(1000+Math.random() *9000);
    const transport = nodemailer.createTransport({
        service:"gmail",
        // hostname:"example.com",
        port: 587,
        secure:false,
        auth: {
            user:"kushwahanjali730@gmail.com",
            pass:"vxmywuzsfzpzewsm",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from :"anjlai Pvt. Ltd.<kushwahanjali730@gmail.com>",
        to : req.body.email,
        subject : "password reset link",
        html:
         `<h1> password Reset OTP
        <h3>OTP:${OTP}</h3>
        `
        

    };

    transport.sendMail(mailOptions, async (err,info)=>{

     if(err) return res.send(err);
        console.log(info);

        user.otp = OTP;
        await user.save();

        return res.redirect(`/verify-otp/${user._id}`);

    });
} 
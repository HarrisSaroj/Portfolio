const mongoose = require('mongoose');
require("dotenv").config();
// const {contactUsEmail} = require('./mail/template/contactForm')
// const nodemailer = require('./utils/mailSender');

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("Connect to Database"))
.catch((error) => {
    console.log("Cannot Connected to the Database");
    console.error(error);
    process.exit(1);
})


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
        unique: true,
    },
},{timestamps: true});

const UserDetails = mongoose.model('usersDetails', UserSchema);
UserDetails.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
const { useEffect } = require('react');
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend's URL
  credentials: true,
}));

app.get('/', (req, res) => {
    res.json({
        success:true,
        message: "Your app is running..."
    })
})

app.post('/register', async(req, res) => {
    try {
        const users = new UserDetails(req.body);
        if(!users){
            res.status(404).json({
                success: false,
                message: 'All Fields are required'
            })
        }
        let result = await users.save();
        result = result.toObject();

        return res.status(200).json({
            success: true,
            message: "Data Stored Successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})

app.listen(process.env.PORT)
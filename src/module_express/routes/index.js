const express = require('express');
const router = express.Router()

const login = require('./login');
const characters = require('./characters');
const favorites = require("./favorites");

router.get('/',(req,res)=>{
    res.status(200).json({
        message: "from here you can get the rest of the routes", 
        routes: {
            login: "/login",
            characters: "/characters",
            favorites: "/favorites"
        }
    })
})
router.use("/characters", characters)
router.use("/favorites", favorites)
router.use("/login", login)

module.exports = router
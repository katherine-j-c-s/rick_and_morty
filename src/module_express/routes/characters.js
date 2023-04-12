const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message: "this is character route", 
        routes: {
            all: "/allChars",
            getById: "/:id",
            getDetail: "/detail/:id"
        }
    })
})

const {getCharById,getAllChar} = require('./../controlers/characters')

router.get("/allChars", getAllChar)
router.get("/:id", getCharById)
router.get("/detail/:id", getCharById)

module.exports = router
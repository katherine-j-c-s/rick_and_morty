const express = require('express');
const router = express.Router()

const {postFav, deleteFav} = require("./../controlers/favorites")
// const postFav = require('../controlers/postFav')
// const deleteFav = require('../controlers/deleteFav')

router.post("/",postFav)
router.delete("/:id",deleteFav)

module.exports = router
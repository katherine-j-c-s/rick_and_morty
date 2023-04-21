const { Favorite } = require('../../db/db')

async function postFav(req,res) {
    try {
        const {name, origin, status, image, species , gender} = req.body
        if (name && origin && status && image && species && gender) {
            await Favorite.create(name, origin, status, image, species , gender)
            const allFavorites = await Favorite.findAll()
            console.log(allFavorites);
            res.status(200).json(allFavorites)
        }else{
            res.status(401).json({menssage:"Faltan datos"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports =  postFav

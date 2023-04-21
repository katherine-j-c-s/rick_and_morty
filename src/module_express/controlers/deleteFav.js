const { Favorite } = require('../../db/db')

async function deleteFav(req,res) {
    try {
        const {id} = req.params
        if (id) {
            await Favorite.destroy({where:{id}})
            const allFavs = await Favorite.findAll()
            res.status(200).json(allFavs)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = deleteFav
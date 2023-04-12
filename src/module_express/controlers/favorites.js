require('dotenv').config()

const STATUS_OK = process.env.DB_STATUS_OK
const STATUS_ERR = process.env.DB_STATUS_ERR

let myFavorites = []

function postFav(req,res) {
    const { id, name, status, species, gender, origin, image } = req.body;
    try {
        if (!id || !name || !image) {
            res
            .status(STATUS_ERR)
            .json({ message: "The require information is missing" })
        }else {
            const character = {
                id,
                name,
                status,
                species,
                gender,
                origin,
                image,
              };
              myFavorites.push(character);
              res.status(STATUS_OK).json(myFavorites);
        }
    } catch (error) {
        res.status(STATUS_ERR).json({ message: error });
    }
}

function deleteFav(req,res){
    const {id} = req.params
    try {
        if (!id) {
            return res.status(STATUS_ERR).json({ message: "id not found" });
        }
        let newList = myFavorites.filter(ch=> ch.id !== Number(id))
        myFavorites = newList
        res.status(STATUS_OK).json(myFavorites);
    } catch (error) {
        res.status(STATUS_ERR).json({ message: error });
    }
}

module.exports = {
    postFav,
    deleteFav
}
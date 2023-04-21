const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const STATUS_OK = 200
const STATUS_ERR = 404

function getAllChar(req,res) {
    try {
        axios.get(`${URL}`).then(({ data }) => {
            if (data) {
              const characters = data.results.map((data) => {
                const character = {
                  id: data.id,
                  status: data.status,
                  name: data.name,
                  species: data.species,
                  origin: data.origin?.name,
                  image: data.image,
                  gender: data.gender,
                };
                return character;
              });
      
              res.status(STATUS_OK).json(characters);
            } else {
              res.status(STATUS_ERR).json({ message: "character not found" });
            }
        });
    } catch (error) {
        res.status(500).json({ message:error })
    }
}
function getCharById(req,res) {
    const { id } = req.params
    try {
        if (id) {
            axios.get(`${URL}${id}`)
            .then(({data})=>{
                if (data) {
                    const character = {
                        ...data
                    }
                    res.status(STATUS_OK).json(character)
                }else{
                    res.status(STATUS_ERR).json({message:"character not found"})
                }
            })
        }
    } catch (error) {
        res.status(500).json({ message:error })
    }
}

module.exports = {
    getAllChar,
    getCharById
}
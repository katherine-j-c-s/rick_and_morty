const { Sequelize } = require('sequelize');
const users = require('./models/User.js')
const favorites = require('./models/Favorites.js')

const sequelize = new Sequelize(
    `postgres://postgres:hjsr1311@localhost:5432/rickandmorty`,
    { logging: false, native: false }
)

users(sequelize)
favorites(sequelize)

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'UserFavorite' ,timestamps: false })
Favorite.belongsToMany(User, { through: 'UserFavorite' ,timestamps: false })

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}
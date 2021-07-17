module.exports = (sequelize, Sequelize) => {

    const Catergories = sequelize.define("categorie", {
        categories: {
            type: Sequelize.STRING
        },
        descriptions: {
            type: Sequelize.STRING
        }
    })

    return Catergories
}
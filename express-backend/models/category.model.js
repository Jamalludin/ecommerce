module.exports = (sequelize, Sequelize) => {

    const Catergories = sequelize.define("categorie", {
        categories: {
            type: Sequelize.STRING
        },
        descriptions: {
            type: Sequelize.STRING
        },
        is_deleted: {
           type: Sequelize.BOOLEAN,
           defaultValue: false
        }
    })

    return Catergories
}
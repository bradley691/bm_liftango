/**
 * The type of stop this for this address
 */
module.exports = (sequelize, type) => {
    return sequelize.define('stops', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
    })
}
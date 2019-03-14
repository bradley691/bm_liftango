/**
 * ride connects the driver to the stops
 */
module.exports = (sequelize, type) => {
    return sequelize.define('rides', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        day: type.DATEONLY,
    })
}
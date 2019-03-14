/**
 * address stores each stop, stop type and the user that was dropped off.
 */
module.exports = (sequelize, type) => {
    return sequelize.define('addresses', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        est_time: type.TIME,
        street: type.STRING,
        suburb: type.STRING,
        state: type.STRING,
    })
}
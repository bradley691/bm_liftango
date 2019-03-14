/**
 * the role of the user, at this point driver or passenger
 */
module.exports = (sequelize, type) => {
    return sequelize.define('roles', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
    })
}
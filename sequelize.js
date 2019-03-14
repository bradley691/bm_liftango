const Sequelize = require('sequelize');
const RoleModel = require('./models/role');
const UserModel = require('./models/user');
const RideModel = require('./models/ride');
const StopModel = require('./models/stop');
const AddressModel = require('./models/address');

const sequelize = new Sequelize('bm_lift', 'bm_lift', 'bmlift123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Role = RoleModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Ride = RideModel(sequelize, Sequelize);
const Stop = StopModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);

User.belongsTo(Role);
Ride.belongsTo(User);
Address.belongsTo(Ride);
Address.belongsTo(User);
Address.belongsTo(Stop);

sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
    .then ( () => {
        sequelize.sync({ force: true })
            .then(() => {
                console.log('Database has been created!');
        });
    });
    

module.exports = {
    Role,
    User,
    Ride,
    Stop,
    Address,
};

const seedDirection = require('.directions-seeds');
const seedIngredients = require('.ingredients-seeds');

const sequelize = require('');

const seedAll = async () => {
    //sync model with database
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedDepartments();
    console.log('finished ingredients seeding');

    await seedUsers();
    console.log('finished directions seeding');


    process.exit(0);
};

seedAll();

// need to add a bulkcreate somewhere
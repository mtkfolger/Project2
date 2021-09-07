const User = require('./User');
const Eat = require('./Eat');
const Fit = require('./Fit');
const Goals = require('./Goals');
const Meal = require('./Meal');
const Weight = require('./Weight');


<<<<<<< Updated upstream
Meal.belongsToMany(User, {
    through: {
        model: Eat,
        unique: false
    },
});

User.belongsToMany(Meal, {
    through: {
        model: Eat,
        unique: false
    },
});


Goals.belongsToMany(User, {
    through: {
        model: Weight,
        unique: false
    },
});

User.belongsToMany(Goals, {
    through: {
        model: Weight,
        unique: false
    },
});

Fit.belongsTo(User, {
    foreignKey: 'User_id',
});


module.exports = { User, Eat, Fit, Goals, Weight, Meal, };
=======
Goals.belongsToMany(User, {
    through: {
        model: Weight,
        unique: false,
    });

User.belongsToMany(Goals, {
    through: {
        model: Weight,
        unique: false,
    });

Meal.belongsToMany(User, {
    through: {
        model: Eat,
        unique: false,
    });

User.belongsToMany(Meal, {
    through: {
        model: Eat,
        unique: false,
    });

Fit.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Eat, Fit, Goals, Weight, Meal };
>>>>>>> Stashed changes

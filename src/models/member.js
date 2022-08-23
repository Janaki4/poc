module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("member", {
        memberId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apiKey: {
            type: Sequelize.STRING
        }
    });

    return Member;
};

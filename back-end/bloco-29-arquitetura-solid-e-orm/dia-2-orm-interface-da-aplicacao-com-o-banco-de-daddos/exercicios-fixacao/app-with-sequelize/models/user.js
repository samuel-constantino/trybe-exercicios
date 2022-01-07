const User = (sequelize, DataTypes) => (
  sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  })
);

module.exports = User;
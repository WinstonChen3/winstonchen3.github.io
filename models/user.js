const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('makerspace', 'root', '4d3a8b20dd', {
  host: 'localhost',
  dialect: 'mariadb',
  define: {
    timestamps: false
  }
});

// Define the User model
const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      try {
        const hashedPassword = await bcrypt.hash(user.password, 10); // Salt rounds: 10
        user.password = hashedPassword;
      } catch (error) {
        throw new Error('Password hashing failed');
      }
    },
  },
});

// Method to compare passwords
User.prototype.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Sync the model with the database (create the table if it doesn't exist)
(async () => {
  try {
    await sequelize.sync({ force: false }); // Set force: true to drop and re-create the table on every app start
    console.log('User table synced');
  } catch (error) {
    console.error('Error syncing User table:', error);
  }
})();

module.exports = User;

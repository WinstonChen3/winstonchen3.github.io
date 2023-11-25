const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('makerspace', 'root', '4d3a8b20dd', {
  host: 'localhost',
  dialect: 'mariadb',
  define: {
    timestamps: false
  }
});

// Define the Equipment model
const Equipment = sequelize.define('Equipment', {
  equipment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Sync the model with the database (create the table if it doesn't exist)
(async () => {
  try {
    await sequelize.sync({ force: false }); // Set force: true to drop and re-create the table on every app start
    console.log('equipment table synced');
  } catch (error) {
    console.error('Error syncing equipment table:', error);
  }
})();

module.exports = Equipment;

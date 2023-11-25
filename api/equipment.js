const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipment.js');
const { Sequelize } = require('sequelize');

// POST /api/equipment
router.post('', async (req, res) => {
    const { name, description, quantity } = req.body;
    const is_available = req.body.is_available === 'on'; // Convert to boolean

    try {
        // Check if the username or email already exists in the database
        const existing = await Equipment.findOne({ where: { name } });
        if (existing) {
            return res.status(400).json({ error: 'equipment already exists' });
        }

        // Create a new user instance
        const newEquipment = new Equipment({ name, description, quantity, is_available });

        // Save the new user to the database
        await newEquipment.save();

        res.status(201).json({ message: 'equipment created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'failed to create equipment' });
    }
})

// GET /api/equipment
router.get('', async (req, res) => {
/*    
    try {
        const name = req.query.name;
        const list = await Equipment.findAll( );
        // const existing = await Equipment.findOne({ where: { name } });
        res.json(list);
    }
    catch (error) {
        res.status(500).json({error : 'failed to fetch equipments'});
    }
*/
    const { page, size, name } = req.query;
    const Op = Sequelize.Op;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
    Equipment.findAndCountAll({ where: condition, limit, offset })
      .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving equipments."
        });
      });
});

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? (page - 1) * limit : 0;
  
    return { limit, offset };
  };
  
  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: equipments } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, equipments, totalPages, currentPage };
  };
  
module.exports = router;

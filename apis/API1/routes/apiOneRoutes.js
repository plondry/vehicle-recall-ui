const express = require('express');
const vehicleController = require('../controllers/apiOneController');

const router = express.Router();


router
.route('/')
//A GET request to retrieve ALL data
  .get(vehicleController.getAllVehiclesData)
// A POST request that can receive JSON input
  .post(vehicleController.createVehicleData);


// A GET request to retrieve a single record if provided with a record identifier{id}
router
  .route('/:id')
  .get(vehicleController.getVehicleData)
  
 

module.exports = router;
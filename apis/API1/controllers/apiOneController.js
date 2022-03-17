const ApiOne = require('../models/apiOneModel');
const APIFeatures = require('../utils/apiFeatures');


// A GET request to retrieve ALL data
exports.getAllVehiclesData = async (req, res) => {
  try {
    
    const features = new APIFeatures(ApiOne.find(), req.query)
    
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const ResultSet = await features.query;

    
    res.status(200).json({
      status: 'success',
      results: ResultSet.length,
      ResultSet
      
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


// A GET request to retrieve a single record if provided with a record identifier
exports.getVehicleData = async (req, res) => {
  try {
       
    const features = new APIFeatures(ApiOne.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
      
    const ResultSet = await ApiOne.findById(req.params.id);
  
    res.status(200).json({
      status: 'success',
      results: ResultSet.length,
      ResultSet
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//A POST request that can receive JSON input
exports.createVehicleData = async (req, res) => {
  try {
  
    const ResultSet = await ApiOne.create(req.body);

    res.status(201).json({
      status: 'success',
      results: ResultSet.length,
      ResultSet
      
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};



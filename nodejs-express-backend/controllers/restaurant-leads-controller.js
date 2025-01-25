const httpStatus = require('../constants/httpStatus.js');
const { 
  successResponse, 
  errorResponse, 
  validationErrorResponse 
} = require('../utils/apiResponse');
const RestaurantLead = require("../models/restaurant-lead.js");

const createLead = async (req, res) => {
  try {
    console.log('📥 Received request body:', req.body);
    
    const newLead = await RestaurantLead.create(req.body);
    console.log('✅ Lead created with ID:', newLead._id);
    
    return res.status(httpStatus.CREATED).json(
      successResponse(newLead, 'Lead created successfully')
    );
    
  } catch (error) {
    console.error('❌ Creation error:', error.message);

    if (error.name === 'ValidationError') {
      return res.status(httpStatus.BAD_REQUEST).json(
        validationErrorResponse(error.errors)
      );
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
      errorResponse('Internal server error')
    );
  }
};

const getAllLeads = async (req, res) => {
  try {
    const leads = await RestaurantLead.find();
    console.log(`📋 Retrieved ${leads.length} leads`);
    
    return res.status(httpStatus.OK).json(
      successResponse(leads, `Found ${leads.length} leads`)
    );
    
  } catch (error) {
    console.error('❌ Get all error:', error.message);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
      errorResponse('Failed to retrieve leads')
    );
  }
};

const getLeadById = async (req, res) => {
  try {
    const lead = await RestaurantLead.findById(req.params.id);
    
    if (!lead) {
      console.log('⚠️ Lead not found with ID:', req.params.id);
      return res.status(httpStatus.NOT_FOUND).json(
        errorResponse('Lead not found', httpStatus.NOT_FOUND)
      );
    }
    
    console.log('🔍 Found lead with ID:', lead._id);
    return res.status(httpStatus.OK).json(
      successResponse(lead, 'Lead retrieved successfully')
    );
    
  } catch (error) {
    console.error('❌ Get by ID error:', error.message);
    
    if (error.name === 'CastError') {
      return res.status(httpStatus.BAD_REQUEST).json(
        errorResponse('Invalid ID format', httpStatus.BAD_REQUEST)
      );
    }
    
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
      errorResponse('Failed to retrieve lead')
    );
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await RestaurantLead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true,
        runValidators: true 
      }
    );

    if (!lead) {
      console.log('⚠️ Lead not found for update:', req.params.id);
      return res.status(httpStatus.NOT_FOUND).json(
        errorResponse('Lead not found', httpStatus.NOT_FOUND)
      );
    }

    console.log('🔄 Updated lead with ID:', lead._id);
    return res.status(httpStatus.OK).json(
      successResponse(lead, 'Lead updated successfully')
    );

  } catch (error) {
    console.error('❌ Update error:', error.message);

    if (error.name === 'ValidationError') {
      return res.status(httpStatus.BAD_REQUEST).json(
        validationErrorResponse(error.errors)
      );
    }

    if (error.name === 'CastError') {
      return res.status(httpStatus.BAD_REQUEST).json(
        errorResponse('Invalid ID format', httpStatus.BAD_REQUEST)
      );
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
      errorResponse('Failed to update lead')
    );
  }
};

const deleteLead = async (req, res) => {
  try {
    const lead = await RestaurantLead.findByIdAndDelete(req.params.id);

    if (!lead) {
      console.log('⚠️ Lead not found for deletion:', req.params.id);
      return res.status(httpStatus.NOT_FOUND).json(
        errorResponse('Lead not found', httpStatus.NOT_FOUND)
      );
    }

    console.log('🗑️ Deleted lead with ID:', lead._id);
    return res.status(httpStatus.OK).json(
      successResponse(null, 'Lead deleted successfully')
    );

  } catch (error) {
    console.error('❌ Delete error:', error.message);

    if (error.name === 'CastError') {
      return res.status(httpStatus.BAD_REQUEST).json(
        errorResponse('Invalid ID format', httpStatus.BAD_REQUEST)
      );
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
      errorResponse('Failed to delete lead')
    );
  }
};

module.exports = {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
};
const Analytics = require('../models/analytics');

exports.getAnalytics = async (req, res) => {
  try {
    const data = await Analytics.find().populate('userId', 'email');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

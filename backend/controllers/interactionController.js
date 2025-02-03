const Interaction = require('../models/interaction');

exports.logInteraction = async (req, res) => {
  try {
    const { userId, eventType, metadata } = req.body;
    const interaction = new Interaction({ userId, eventType, metadata });
    await interaction.save();
    res.json({ message: 'Interaction logged' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

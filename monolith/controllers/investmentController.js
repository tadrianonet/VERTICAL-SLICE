const Investment = require('../models/investmentModel');

const createInvestment = async (req, res) => {
  try {
    const investment = new Investment(req.body);
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInvestment,
};

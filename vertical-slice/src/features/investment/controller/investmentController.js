const investmentService = require('../service/investmentService');

const createInvestment = async (req, res) => {
  try {
    const investment = await investmentService.createInvestment(req.body);
    res.status(201).json(investment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInvestment,
};

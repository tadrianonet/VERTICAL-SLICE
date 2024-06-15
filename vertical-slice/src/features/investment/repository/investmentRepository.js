const Investment = require('../models/investmentModel');

const createInvestment = async (investmentData) => {
  const investment = new Investment(investmentData);
  return investment.save();
};

module.exports = {
  createInvestment,
};

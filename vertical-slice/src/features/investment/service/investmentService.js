const investmentRepository = require('../repository/investmentRepository');

const createInvestment = async (investmentData) => {
  return investmentRepository.createInvestment(investmentData);
};

module.exports = {
  createInvestment,
};

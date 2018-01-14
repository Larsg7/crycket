var festival = artifacts.require("./Tickets.sol");

module.exports = function(deployer) {
  deployer.deploy(festival);
};

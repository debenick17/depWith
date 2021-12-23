const Maincontract = artifacts.require("Maincontract");

module.exports = function (deployer) {
    deployer.deploy(Maincontract);
};
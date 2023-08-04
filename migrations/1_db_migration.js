var VerifyDB = artifacts.require("VerifyDB");

module.exports = function (deployer) {
    // deployment steps
    const OwnerAddress = "0x5442741956F873B946C9156494e76694fDA12A1C";
    deployer.deploy(VerifyDB, OwnerAddress);
};
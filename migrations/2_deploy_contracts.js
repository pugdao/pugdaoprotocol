const Pugdao = artifacts.require("Pugdao");
module.exports = async function(deployer, _network, addresses) {
  const [admin, _] = addresses;
  await deployer.deploy(Pugdao);
  const pugdao = await Pugdao.deployed();
};

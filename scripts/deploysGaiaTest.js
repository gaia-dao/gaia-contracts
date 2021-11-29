
const { ethers } = require("hardhat");

const main = async () => {
    const [deployer, MockDAO] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);

    // Deploy sOHM
    const SOHM = await ethers.getContractFactory('sOlympus');
    const sOHM = await SOHM.deploy();

    console.log('sGaia address:', sOHM.address);

    let rebaseTxn = await sOHM.rebase(100, 1);
    await rebaseTxn.wait();
    console.log(rebaseTxn);

};

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})
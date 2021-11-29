require("dotenv").config();
require("@nomiclabs/hardhat-waffle");




module.exports = {
  solidity: {
    version: "0.7.5",
    overrides: {
      "contracts/Treasury.sol": {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: process.env.ARBITRUMONE_URL,
        blockNumber: 3307200, // latest block when input, can be changed
        enabled: true
      },
      accounts: [
        {privateKey: process.env.PRIVATE_KEY_1, balance: (100 * (10 ** 18)).toString()},
        {privateKey: process.env.PRIVATE_KEY_2, balance: (100 * (10 ** 18)).toString()}
      ]
    },
    arbitrumOne: {
      chainId: 42161,
      url: process.env.ARBITRUMONE_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
    },
    arbitrumTest: {
      chainId: 421611,
      url: process.env.ARBITRUMTEST_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
    }
  }
};

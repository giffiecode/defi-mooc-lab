require("@nomiclabs/hardhat-waffle"); 
require('dotenv').config(); 

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

console.log("Alchemy API Key:", process.env.ALCHEMY_API_KEY);
console.log("Private Key:", process.env.PRIVATE_KEY); 

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1,
      mining: {
        auto: true,
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      accounts: {
        mnemonic: "swap swap swap swap swap swap swap swap swap swap swap swap"
      },
    },
    // Adding Alchemy Network
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  }, 
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 600000
  },
};

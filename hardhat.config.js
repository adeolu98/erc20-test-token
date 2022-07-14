require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_LINK,
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_LINK,
      accounts: [PRIVATE_KEY]
    }
  }
};




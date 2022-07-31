require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.8",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/YgsiefsAl4FiyzVmGO2tl-ckEQRVupTY",
      accounts: [
        "a66fe97a351b49ebdb5768923ff7e04510404f8d684b18c0c6d7a364de68f3a8",
      ],
    },
  },
};

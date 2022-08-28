// https://eth-rinkeby.alchemyapi.io/v2/JIqMiOvC7MrIpHH_KTP7AupfFMycbbAV

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/JIqMiOvC7MrIpHH_KTP7AupfFMycbbAV',
      accounts: ['7bd034bc686d00d7b2f979de097f967a1dcf3f0c868577e44fe5daaa3421b516']
    }
  }
}
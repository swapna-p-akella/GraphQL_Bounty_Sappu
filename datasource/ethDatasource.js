const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    return this.get
      (
        '',
        {
          module: 'account',
          action: 'balance',
          address: `${eth_address}`,
          apiKey: process.env.ETHERSCAN_API
        },
        {
          headers: {
            accept: "application/json",
          },
        }
      );
  }

  async totalSupplyOfEther() {
    return this.get
      (
        '',
        {
          module: 'stats',
          action: 'ethsupply',
          apiKey: process.env.ETHERSCAN_API
        },
        {
          headers: {
            accept: "application/json",
          },
        }
      );
  }
}

module.exports = EtherDataSource;

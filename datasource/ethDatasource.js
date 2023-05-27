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
      'https://api.etherscan.io/api?module=account&action=balance&address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&tag=latest&apikey=7KXPGFHGS6H3F163VUT2N1177FXWNR3JQK'
    ); 
  }

  async totalSupplyOfEther() {
    return this.get
      (
        'https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=7KXPGFHGS6H3F163VUT2N1177FXWNR3JQK'
      );
  }
}

module.exports = EtherDataSource;

import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  createTransactionEvent,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';

const abi = require('erc-20-abi')

const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
    if (!txEvent.to || txEvent.to===""){

      if (txEvent.receipt.contractAddress) {
         let symbol = ""
         const contract = new web3.eth.Contract(abi,txEvent.receipt.contractAddress)
         try{
           symbol = await contract.methods.symbol().call()
         } catch {
           symbol="no-name"
         }
         findings.push(
          Finding.fromObject({
            name: "new contract created",
            description: `Created contract ${txEvent.receipt.contractAddress}. Symbol ${symbol}`,
            alertId: "FORTA-101",
            severity: FindingSeverity.Info,
            type: FindingType.Info,
            metadata: {
              address: txEvent.receipt.contractAddress,
              symbol: symbol
            },
          })
         )
          
      }
    

    }
    
    

  return findings;
}

export default {
  handleTransaction
}
import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("token created agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxEventWithToken = () => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:null,
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:{} as any,
        contractAddress:"0x5d2BF248A2a31Da2bdC8FD0b0B6c3ceE71f7175A",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("token event", () => {
      it("coin symbol is MPAD", async () => {
        const txEvent = createTxEventWithToken()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings[0].metadata.symbol).toBe("MPAD")
      })
  
    })
  })
---
description: Thorest-client
---

# Thorest-client

The thorest-client serves as a RESTful API for seamless access to the VechainThor network. This client streamlines the interaction with the blockchain by providing a set of methods specifically tailored to retrieve information from various endpoints. By encapsulating the intricacies of the underlying communication with the VechainThor network, developers can easily integrate this client into their applications. Whether fetching details about specific blocks, querying transaction information, or accessing other blockchain-related data, the thorest-client simplifies the process, enabling efficient and straightforward integration with the VechainThor network through RESTful API calls.

## Accounts

The Thorest-client extends its functionality to provide seamless access to account-related information on the VechainThor network. The following code exemplifies how developers can utilize the Thorest-client to interact with accounts:

[example](examples/thorest-client/accounts.ts)

In this example, the code initializes a Thorest client for the VechainThor testnet network and demonstrates three crucial methods for interacting with accounts:

 - getAccount(address: string): Promise<Account>

Retrieves details of a specific account based on its address. The provided code fetches details for the account with the address '0x5034aa590125b64023a0262112b98d72e3c8e40e'.

 - getBytecode(address: string): Promise<string>

Fetches the bytecode of the smart contract associated with the given account address.

 - getStorageAt(address: string, key: string): Promise<string>

Retrieves the value stored at a specific key in the storage of the smart contract associated with the given account address.

These methods showcase how the Thorest-client simplifies the process of obtaining account-related information, providing developers with efficient means to integrate VechainThor blockchain data into their applications.

## Blocks

The Thorest-client facilitates easy interaction with blocks on the VechainThor network, as demonstrated in the following code snippet:

[example](examples/thorest-client/blocks.ts)

In this example, the code initializes a Thorest client for the VechainThor testnet network and showcases three essential methods for interacting with blocks:

 - getBlock(height: number): Promise<Block>

Retrieves details of a specific block based on its height. In the provided code, it fetches details for the block at height 1.

 - getBestBlock(): Promise<Block>

Fetches details of the latest block on the VechainThor network, representing the best-known block.

 - getFinalBlock(): Promise<Block>

Retrieves details of the finalized block, which is the latest block confirmed by the network consensus.

These methods demonstrate how the Thorest-client simplifies the process of fetching block-related information, providing developers with straightforward ways to integrate VechainThor blockchain data into their applications.

## Logs

The Thorest-client extends its capabilities to efficiently filter and retrieve event logs and transfer logs on the VechainThor network. The following code exemplifies how developers can use the Thorest-client to filter event logs and transfer logs:

[example](examples/thorest-client/logs.ts)

In this example, the code initializes a Thorest client for the VechainThor testnet network and demonstrates two essential methods for interacting with logs:

 - filterEventLogs(
        filterOptions: FilterEventLogsOptions
    ): Promise<EventLogs>

The `filterEventLogs` method simplifies the process of retrieving event logs from the VechainThor network. Developers can set criteria for the block range, apply pagination options, and define filters based on specific addresses and topics. The result is an array of event logs that match the specified criteria.

 - filterTransferLogs(
        filterOptions: FilterTransferLogsOptions
    ): Promise<TransferLogs>

The `filterTransferLogs` method provides a streamlined way to retrieve transfer logs from the VechainThor network. Developers can define criteria, including the block range, pagination options, and filters for transaction origin, sender, and recipient. The method returns an array of transfer logs that meet the specified criteria.

## Nodes

The Thorest-client allows developers to interact with nodes on the VechainThor network, providing information about connected peers. The following code demonstrates how to use the Thorest-client to retrieve connected peers of a node:

[example](examples/thorest-client/nodes.ts)

In this example, the code initializes a Thorest client for the VechainThor testnet network and utilizes the `getNodes` method to retrieve information about connected peers.

 - getNodes(): Promise<ConnectedPeer | null>

The `getNodes` method simplifies the process of obtaining details about connected peers of a node in the VechainThor network. The method returns information about the connected peers, allowing developers to monitor and analyze the network's node connectivity.

## Transactions

The Thorest-client provides methods for developers to interact with transactions on the VechainThor network, allowing retrieval of transaction details and transaction receipts. The following code illustrates how to use the Thorest-client to fetch information about a specific transaction:

[example](examples/thorest-client/transactions.ts)

In this example, the code initializes a Thorest client for the VechainThor testnet network and showcases three essential methods for interacting with transactions:

 - sendTransaction(raw: string): Promise<TransactionSendResult>

The `sendTransaction` method enables developers to broadcast a raw transaction to the VechainThor network. This method is crucial for initiating new transactions and executing smart contract functions.

 - getTransaction(
        id: string,
        options?: GetTransactionInputOptions
    ): Promise<TransactionDetail | null>

The `getTransaction` method facilitates the retrieval of detailed information about a specific transaction on the VechainThor network. Developers can use this method to access data such as the sender, recipient, amount, and other transaction details.

 - getTransactionReceipt(
        id: string,
        options?: GetTransactionReceiptInputOptions
    ): Promise<TransactionReceipt | null> 

The `getTransactionReceipt` method allows developers to retrieve the receipt of a specific transaction on the VechainThor network. This includes information such as the transaction status, block number, and gas used.

### Fee Delegation

Fee delegation is a feature on the VechainThor blockchain which enables the transaction sender to request another entity, a sponsor, to pay for the transaction fee on the sender's behalf. Fee delegation greatly improves the user experience, especially in the case of onboarding new users by removing the necessity of the user having to first acquire cryptocurrency assets before being able to interact on-chain.

The following code demonstrates how to use the Thorest-client with the fee delegation feature:

[example](examples/thorest-client/delegated-transactions.ts)
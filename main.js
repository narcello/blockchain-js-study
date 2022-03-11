const { Blockchain, Transaction } = require("./blockchain");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "44f5299c2704713105de9a274e5dccac7ec01d446b1eaba2e20537d04492092d"
);
const myWalletAddress = myKey.getPublic("hex"); // my fake wallet from my fake private key.

const savjeeCoin = new Blockchain(); // initiate a Blockchain instance

const tx1 = new Transaction(myWalletAddress, "public key", 10); // create the first transaction
tx1.signTransaction(myKey); // sign this transaction to my key pair
savjeeCoin.addTransaction(tx1); // this will add the transaction to pending transactions list

console.log("Starting the miner...");
savjeeCoin.minePendingTransactions(myWalletAddress); // will mine pending transactions and the rewards will send to 'myWalletAddress' address

const tx2 = new Transaction(myWalletAddress, "public key", 30); // create the first transaction
tx2.signTransaction(myKey); // sign this transaction to my key pair
savjeeCoin.addTransaction(tx2);

let balance = savjeeCoin.getBalanceOfAddress(myWalletAddress); // get the balance of the wallet address passed as prop
console.log("Balance of xavier is: ", balance);
console.log("Starting the miner...");

console.log("\n");
savjeeCoin.minePendingTransactions(myWalletAddress); // will mine pending transactions and the rewards will send to 'myWalletAddress' address

balance = savjeeCoin.getBalanceOfAddress(myWalletAddress); // get the balance of the wallet address passed as prop
console.log("Balance of xavier is: ", balance);

console.log("\n");
savjeeCoin.minePendingTransactions(myWalletAddress); // will mine pending transactions and the rewards will send to 'myWalletAddress' address

balance = savjeeCoin.getBalanceOfAddress(myWalletAddress); // get the balance of the wallet address passed as prop
console.log("Balance of xavier is: ", balance);

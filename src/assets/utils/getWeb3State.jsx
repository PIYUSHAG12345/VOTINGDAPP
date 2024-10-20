import { ethers } from "ethers";
import abi from "../constant/abi.json";
import axios from "axios";
import { toast } from "react-hot-toast";

export const getWeb3State = async () => {
  try {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      toast.error("MetaMask is not installed. Please install it to use this app.");
      throw new Error("MetaMask is not installed");
    }

    // Request account access from MetaMask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];
    toast.success(`Connected account: ${selectedAccount}`);

    // Request chain ID
    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    const chainId = parseInt(chainIdHex, 16);

    // Initialize ethers.js provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Contract information
    const contractAddress = "0x83A8cB9f282DD6763bca9c4bcf7977a4f5C77aB5";
    const message = "Welcome to Voting App. You accept our terms and conditions.";
    
    // Sign a message with the signer
    const signature = await signer.signMessage(message);
    toast("Signature generated for authentication.");

    // Send authentication request with axios
    const dataSignature = { signature };
    const res = await axios.post(`http://localhost:5173/api/authentication`, {
      selectedAccount,
      signature: dataSignature.signature,
    });

    if (res && res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
      toast.success("Authentication successful.");
    } else {
      toast.error("Failed to authenticate. No token received.");
      console.log("No token received from the server.");
    }

    // Create contract instance
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);

    // Return web3 state
    return {
      contractInstance,
      selectedAccount,
      chainId,
      signer,
      provider,
    };
  } catch (error) {
    toast.error(error.message || "An error occurred while setting up Web3.");
    console.log(error);
    throw new Error("An error occurred while setting up Web3.");
  }
};

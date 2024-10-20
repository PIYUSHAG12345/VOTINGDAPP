import  {ethers}  from "ethers"
import abi from "../constant/abi.json"
import axios from "axios"
import {toast} from "react-hot-toast"
export const getWeb3State=async()=>{
    try{
    if(!window.ethereum){
        throw new error("metamask is not installled")
    }
    const accounts=await window.ethereum.request({
    method:"eth_requestAccounts"
    })
    const selectedAccount=accounts[0];
    const chainIdHex=await window.ethereum.request({
    method:"eth_chainId"
})

const chainId=parseInt(chainIdHex,16);
const provider=new ethers.BrowserProvider(window.ethereum)
const signer=await provider.getSigner()
const contractAddress="0x83A8cB9f282DD6763bca9c4bcf7977a4f5C77aB5"
const message="welcome to voting app,you accept our terms and condition "
const signature=await signer.signMessage(message);
const dataSignature={
    signature
}
const res=await axios.post(`http://localhost:5173/api/authentication?${selectedAccount}`,)
//console.log(res.data.token)
localStorage.setItem("token",res.data.token)
const contractInstance= new ethers.Contract(contractAddress,abi,signer)
return {contractInstance,selectedAccoun,chainId,signer,provider}

 } catch(error){
        console.log(error)
        throw new Error("metamask is not installed")
    }

}
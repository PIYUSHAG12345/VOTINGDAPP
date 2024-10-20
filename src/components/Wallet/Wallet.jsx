import { useEffect } from "react";
import { useWeb3Context } from "../../assets/context/useWeb3Context";
import { getWeb3State } from "../../assets/utils/getWeb3State";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const Wallet=()=>{
const {handleWallet,web3Start}= useWeb3Context()
const {selectedAccount}=getWeb3State
const navigateTo=useNavigate()
useEffect(()=>{
    if(selectedAccount){
        navigateTo('/register-voter')
    }
},[selectedAccount])
return <button onClick={handleWallet}>Connect Wallet</button>
}
export default Wallet;
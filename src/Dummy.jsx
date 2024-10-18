import { useContext } from "react";
import { web3Context } from "./assets/context/web3Context";
const Dummy=()=>{
    const {contractInstance,selectedAccount,chainId}=useContext(web3Context);
    console.log(hello);
    <h1>Dummy Component</h1>
    
}
export default Dummy;
import { useContext } from "react";
import { web3Context } from "./web3Context";
export const useWeb3Context=()=>{
    return useContext(web3Context);
}
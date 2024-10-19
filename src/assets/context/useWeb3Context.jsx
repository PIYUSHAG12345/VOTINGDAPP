import { useContext } from "react";
import {Web3Context} from '/src/assets/context/web3Context.jsx';
export const useWeb3Context=()=>{
    return useContext(Web3Context);
}
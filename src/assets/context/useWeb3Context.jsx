import { useContext } from "react";
import web3Context from '/src/assets/context/web3Context.jsx';
export const useWeb3Context=()=>{
    return useContext(web3Context);
}
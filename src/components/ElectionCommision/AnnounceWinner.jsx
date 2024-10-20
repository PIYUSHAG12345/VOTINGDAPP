import { useEffect,useState } from "react";
import { useWeb3Context } from "../../assets/context/useWeb3Context";
import {toast} from "react-hot-toast"
export default function AnnounceWinner(){
    const {winner,setWinner}=useState()
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;  
      const getWinner=async()=>{
        try{
        const winner=await contractInstance.announceVotingResult()
        const receipt=await winner.wait();
        }
        catch(error){
        toast.error("Error: Announcing result")
        console.error(error)
        }
    }
    return <div>
        <button onClick={getWinner}>Announce Winner</button>
    </div>
}
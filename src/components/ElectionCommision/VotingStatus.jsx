import React, { useState,useEffect } from 'react'
import {useWeb3Context} from "../../../context/Web3Provider.jsx";
import toast from 'react-hot-toast';

const VotingStatus = () => {
    
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
    const [votingStatus, setVotingStatus] = useState("");
    const statusMap={
      0: "Not Started",
      1: "In Progress",
      2: "Ended"
    };
   
    useEffect(()=>{
        const getVotingStatus = async()=>{
          try{
            const currentVotingStatus = await contractInstance.getVotingStatus();
            console.log(currentVotingStatus);
            setVotingStatus(statusMap[currentVotingStatus] || "Unknown Status");
          }catch(error){
            toast.error("Error: Getting Voting Status")
            console.error(error)
            setVotingStatus("Error fetching status");
          }
        }
        if(contractInstance){ getVotingStatus();}
      },[contractInstance])
  return (
    <div>
      <h1>Status: {votingStatus}</h1>
    </div>
  )
}

export default VotingStatus
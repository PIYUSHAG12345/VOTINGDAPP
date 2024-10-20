import React, { useState } from 'react'
import { useWeb3Context } from '../../assets/context/useWeb3Context';
import {toast} from "react-hot-toast"
const DisplayResult = () => {
        
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
    const [winner, setWinner] = useState("No winner declared")
   
    useEffect(()=>{
        const getWinner = async()=>{
          try{
            const winningCandidateAddress = await contractInstance.winner();
            if(winningCandidateAddress!='0x0000000000000000000000000000000000000000'){
              setWinner(winningCandidate)
            }
  
          }catch(error){
            toast.error("Error: Getting Winner")
            console.error(error)
          }
        }
        contractInstance && getWinner()
      },[])
  return (
    <div>
      <h1>Winner: {winner}</h1>
    </div>
  )
}

export default DisplayResult
import {useRef} from "react";
import { useWeb3Context } from "../../assets/context/useWeb3Context";
const VotingTimePeriod=()=>{
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;    const startRef=useRef(null);
    const endRef=useRef(null);

    const handleVotingTime=async(e)=>{
        try{
            e.preventDefault();
            const startTime=startRef.current.value;
            const endTime=endRef.current.value;
            await contractInstance.registerCandidate(name,party,age,gender)
            console.log(startTime,endTime)
        }

        catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <forn onSubmit={handleCandidateRegistration}>
            <label>Start Time:<input type="text" ref={startRef}></input></label>
            <label>End Time:<input type="text"ref={endRef}></input></label>
            
            <button type="submit">Register</button>
        </forn>
        </>
    )
}
export default registerCandidate;
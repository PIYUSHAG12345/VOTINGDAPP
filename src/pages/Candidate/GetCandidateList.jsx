import { useEffect, useState } from "react";
import { useWeb3Context} from "../../assets/context/useWeb3Context";
const GetCandidateList=()=>{
    const {Web3State}=useWeb3Context()
    const {contractInstance}=Web3State;
    const [CandidateList,setCandidateList]=useState([])
    useEffect(()=>{
        const fetchCandidateList=async()=>{
            try{
                const CandidateList=await contractInstance.GetCandidateList();
                setCandidateList()
                console.log(CandidateList)}
                catch(error){
                    console.error(error)
                }
            
        }
contractInstance && fetchCandidateList()

    },[contractInstance])
     return(<>
     <ul>

        {CandidateList.map((CandidateList,index)=>(
            <li key={index}>
                Name:{CandidateList.name},
                party:{CandidateList.party},
                Age:{CandidateList.age.toString()}
                Votes:{CandidateList.votes.toString()}
            </li>
        ))}
     </ul>
     </>)
}
export default GetCandidateList
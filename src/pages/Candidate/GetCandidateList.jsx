import { useEffect } from "react";
import { useWeb3Context} from "../../assets/context/useWeb3Context";
const GetCandidateList=()=>{
    const {contractInstance}=useWeb3Context()
    useEffect(()=>{
        const fetchCandidateList=async()=>{
            try{
                const CandidateList=await contractInstance.GetCandidateList();
                console.log(CandidateList)}
                catch(error){
                    console.error(error)
                }
            
        }
contractInstance && fetchCandidateList()

    },[contractInstance])
     return(<></>)
}
export default GetCandidateList
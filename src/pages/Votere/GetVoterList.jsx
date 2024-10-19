import { useEffect } from "react";
import { useWeb3Context} from "../../assets/context/useWeb3Context";
const GetVoterList=()=>{
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;    useEffect(()=>{
        const fetchVoterList=async()=>{
            try{
                const voterList=await contractInstance.GetVoterList();
                console.log(voterList)}
                catch(error){
                    console.error(error)
                }
            
        }
contractInstance && fetchVoterList()

    },[contractInstance])
     return(<></>)
}
export default GetVoterList
import { useWeb3Context } from "../../assets/context/useWeb3Context";
export default function EmergencyStopVoting(){
    const {contractInstance}=useWeb3Context()
    const emergencyStop=async()=>{
        await contractInstance.EmergencyStopVoting()
    }
    return <button onClick={emergencyStop}>stop voting</button>
}
import { useWeb3Context } from "../../assets/context/useWeb3Context";
export default function EmergencyStopVoting(){
    const {web3State} = useWeb3Context()
    const {contractInstance} = web3State;
        const emergencyStop=async()=>{
        await contractInstance.EmergencyStopVoting()
    }
    return <button onClick={emergencyStop}>stop voting</button>
}
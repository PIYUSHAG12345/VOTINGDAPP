import {useRef} from "react";
import { useWeb3Context } from "../../assets/context/useWeb3Context";
const RegisterVoter=()=>{
    const {contractInstance}=useWeb3Context()
    const nameRef=useRef(null);
    const genderRef=useRef(null);
    const partyRef=useRef(null);
    const ageRef=useRef(null);

    const handleCandidateRegistration=async(e)=>{
        try{
            e.preventDefault();
            const name=nameRef.current.value;
            const age=ageRef.current.value;
            const gender=genderRef.current.value;
            const party=partyRef.current.value;
            await contractInstance.registerCandidate(name,party,age,gender)
            console.log("Registration is successful")
        }

        catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <forn onSubmit={handleCandidateRegistration}>
            <label>Name:<input type="text" ref={nameRef}></input></label>
            <label>Age:<input type="text"ref={ageRef}></input></label>
            <label>Gender:<input type="text"ref={genderRef}></input></label>
            <label>Party:<input type="text"ref={partyRef}></input></label>
        </forn>
        </>
    )
}
export default RegisterVoter;
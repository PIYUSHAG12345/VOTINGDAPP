

export const handleAccountChange=async(setWeb3State)=>{
    const accounts=await window.ethereum.request({
        method:'eth_requestAccount'
    })
    const selectedAccount=account[0];
    setweb3State((prevState)=>({...prevState,selectedAccount}))
    }
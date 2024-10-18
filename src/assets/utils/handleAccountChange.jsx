
export const handleChainChange =async(setWeb3State)=>{
const chainIdHex=await window.ethereum.request({
    method:'eth_chainId'
})
const chainid =parseInt(chainIdHex,16);
setWeb3State((prevState)=>({...prevState,chainid}))
}
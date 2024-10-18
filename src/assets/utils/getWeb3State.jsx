import  {ethers}  from "ethers"
export const getWeb3State=async()=>{
    try{
    if(!window.ethereum){
        throw new error("metamask is not installled")
    }
    const accounts=await window.ethereum.request({
    "method":"eth_requestAccounts"
    })
    const selectedAccoun=account(0);
    const chainIdHex=await window.ethereum
.request({
    "method":"eth_chainId"
})
const chainId=parseInt(chainIdHex,16);
const provider=new ethers.BrowserProvider(window.ethereum)
const signer=await provider.getSigner()
const contractAddress=""
const contractInstance= new ethers.Contract(contractAddress,abi,signer)
return {contractInstance,selectedAccoun,chainId}

 } catch(error){
        console.log(error)
        throw new Error
    }

}
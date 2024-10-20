import axios from "axios";
export const uploadCandidateImage = async()=>{
   try{
     const FormData=new FormData();
    FormData.append("file",file)
    const token =localStorage.getItem("token");
    const config={
        headers:{
            'x-access-token':token
        }
    };
    const res=await axios.post("",FormData)//Image link from registerCandidate(video no_4a 16.04)
    console.log(res.data)}
    catch(error){
        console.error(error)
    }
}
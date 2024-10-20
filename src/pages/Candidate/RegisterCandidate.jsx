import { useRef, useState } from "react";
import { useWeb3Context } from "../../assets/context/useWeb3Context";
import axios from "axios";
import { uploadCandidateImage } from "../../assets/utils/uploadCandidateImage";

const RegisterCandidate = () => {
  const { contractInstance } = useWeb3Context();
  const [file, setFile] = useState(null);
  
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const partyRef = useRef(null);
  const ageRef = useRef(null);

  const handleCandidateRegistration = async (e) => {
    e.preventDefault();
    try {
      const name = nameRef.current.value;
      const age = ageRef.current.value;
      const gender = genderRef.current.value;
      const party = partyRef.current.value;

      // Upload the candidate image if a file is selected
      let imageUrl = "";
      if (file) {
        imageUrl = await uploadCandidateImage(file); // Make sure uploadCandidateImage returns the image URL after upload
      }

      // Register candidate with contractInstance
      await contractInstance.RegisterCandidate(name, party, age, gender, imageUrl);
      console.log("Registration is successful");
    } catch (error) {
      console.error("Error registering candidate:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleCandidateRegistration}>
        <label>Name:<input type="text" ref={nameRef} required /></label>
        <label>Age:<input type="number" ref={ageRef} required /></label>
        <label>Gender:<input type="text" ref={genderRef} required /></label>
        <label>Party:<input type="text" ref={partyRef} required /></label>
        <button type="submit">Register</button>
      </form>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])} // Handle file selection
        accept="image/*"
      />
    </>
  );
};

export default RegisterCandidate;

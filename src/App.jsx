
import './App.css'
import Web3Provider from './assets/context/web3Provider'
import registerCandidate from './pages/Candidate/RegisterCandidate'

function App() {

  return (
    <>
    <Web3Provider> <registerCandidate></registerCandidate></Web3Provider>
    
    </>
  )
}

export default App

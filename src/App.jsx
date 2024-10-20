
import './App.css'
import { routes } from './routes/routes'
import Web3Provider from './assets/context/web3Provider'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
    <Web3Provider> 
      <RouterProvider router={routes}>
      </RouterProvider>
    </Web3Provider>
    
    </>
  )
}

export default App

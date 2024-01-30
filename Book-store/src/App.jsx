
import './App.css'
import Form from "./Component/Form"
import Store from './Component/Store'
import { Route , Routes } from 'react-router-dom'
function App() {


  return (
    <>
  <Routes>
    <Route  path="/"  element={<Store/>} />
    <Route  path="/Form"  element={<Form />} />
    

  </Routes>

    {/* <Store/>
    <Form/> */}
    </>
  )
}

export default App

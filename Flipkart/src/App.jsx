import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import ProductPage from './Components/Body/ProductPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App

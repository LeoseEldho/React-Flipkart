import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import ProductPage from './Components/Body/ProductPage'
import FilterPage from './Components/Body/FilterPage'
import { FilterProvider } from './Components/Body/Context/FilterContext'
import ProductDetails from './Components/Body/ProductDetails'
import ProductDetailsTab from './Components/Body/ProductDetailsTab'


function App() {
  return (
    <>
    <FilterProvider>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path='/filterpage' element={<FilterPage/>}/>
        <Route path='/productPage/productdetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </FilterProvider>
    </>
  )
}


export default App

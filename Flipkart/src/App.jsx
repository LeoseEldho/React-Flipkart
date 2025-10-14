import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import ProductPage from './Components/Body/ProductPage'
import FilterPage from './Components/Body/FilterPage'
import { FilterProvider } from './Components/Body/Context/FilterContext'

function App() {
  return (
    <>
    <FilterProvider>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path='/filterpage' element={<FilterPage/>}/>
      </Routes>
      </FilterProvider>
    </>
  )
}
//sdfewsdfdfwsfesdfe
export default App

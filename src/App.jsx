import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './page/Home.page'
import DetailProductPage from './page/DetailProduct.page'
import NotFoundPage from './page/NotFound.page'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detail/:id' element={<DetailProductPage/>} />
        <Route path='/*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
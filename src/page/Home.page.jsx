import React from 'react'
import NavComponents from '../Nav/Nav.components'
import ProductsGroupComponents from '../components/ProductsGroup.components'
import HeaderSpacerComponents from '../components/HeaderSpacer.components'
import CategoryGroupComponents from '../components/CategoryGroup.components'
import FooterComponents from '../components/Footer.components'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavComponents/>
      <HeaderSpacerComponents/>
      <CategoryGroupComponents/>
      <ProductsGroupComponents/>
      <FooterComponents/>
    </div>
  )
}

export default HomePage
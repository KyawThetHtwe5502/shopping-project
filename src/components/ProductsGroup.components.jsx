import React, { useEffect, useState } from 'react'
import { useGetProductQuery } from '../store/service/endpoints/products.endpoints'
import ProductComponents from './Product.components'
import { useDispatch, useSelector } from 'react-redux'
import { manageProducts } from '../store/slice/cartSlice'
import LoadingProductComponents from './LoadingProduct.components'

const ProductsGroupComponents = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatcher = useDispatch()
  const { isLoading, isError, data } = useGetProductQuery()
  console.log(data, isLoading, isError);
  useEffect(() => {
    dispatcher(manageProducts(data))
    
  }, [data])
  return (
  <div className='container mx-auto'>
    {isLoading ? <LoadingProductComponents/> : <>
    <div className='grid grid-cols-4 gap-3'>
      {products?.map((product) => <ProductComponents key={product.id} product={product} />)}
    </div>
    </>}
  </div>
    
  )
}

export default ProductsGroupComponents
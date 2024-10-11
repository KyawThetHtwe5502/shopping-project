import React from 'react'
import {Button} from "@/components/ui/button"
import { useDispatch } from 'react-redux'
import { useGetCategoryProductsQuery } from '../store/service/endpoints/products.endpoints';
import { manageProducts } from '../store/slice/cartSlice';
const CategoryComponents = ({data:{id,cateBtn,category},handleCateBtn}) => {
    const dispatcher = useDispatch();
    const {data} = useGetCategoryProductsQuery(category);
    const handleBtn = () => {
      handleCateBtn(id)
        dispatcher(manageProducts(data))
    }
  return (
    <Button onClick={handleBtn} className={`border border-gray-800 text-gray-800 bg-white hover:text-white ${cateBtn && "bg-gray-800 text-white"}`} >{category}</Button>
  )
}

export default CategoryComponents
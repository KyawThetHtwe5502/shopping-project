import React from 'react'
import { useDispatch } from 'react-redux'
import { useGetProductQuery } from '../store/service/endpoints/products.endpoints';
import { manageProducts } from '../store/slice/cartSlice';
import {Button } from "@/components/ui/button"

const AllCateBtnComponents = ({handleAllBtn,trueBtn}) => {
    const {  data } = useGetProductQuery()
    const dispatcher = useDispatch();
    const handleBtn = () => {
        handleAllBtn()
        dispatcher(manageProducts(data))
    }
  return (
    <Button onClick={handleBtn} className={`bg-white text-gary-800 border border-gray-800 hover:text-white ${!trueBtn && "bg-gray-800 text-white" }`}>All</Button>
)
}

export default AllCateBtnComponents
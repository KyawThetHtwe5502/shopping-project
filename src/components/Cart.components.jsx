import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useDispatch } from 'react-redux'
import { deleteCart, updateQuantity } from '../store/slice/cartSlice'
import {RiDeleteBinLine} from "react-icons/ri";
import {FaMinus, FaPlus} from "react-icons/fa6";
const CartComponents = ({ cart: { id, image, title, price,quantity } }) => {
    const dispatcher = useDispatch()
    
    const handleUpdateQuantity = (newQuantity) => {
        dispatcher(updateQuantity({id,quantity : newQuantity}))
    };
    const handleDelBtn = () => {
        dispatcher(deleteCart(id))
    }
    return (
        <Card className="group" >
            <img src={image} className='h-20 -mt-12 ms-4' alt="" />
            <div className='px-4 py-2 relative'>
            

                <button className='text-red-500 absolute -top-3 right-3 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 duration-200' onClick={handleDelBtn}><RiDeleteBinLine/></button>
                <div>

                <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
                </div>
                <div className='flex items-center justify-between'>
                    <div>

                <span>${price}</span>/<span>${(price * quantity).toFixed(2)}</span>
                    </div>
                <div className='flex '>
                    <span className="bg-neutral-300 text-xs active:scale-90 p-0.5" onClick={() => quantity > 1 && handleUpdateQuantity(quantity - 1)}>
                        <FaMinus/>
                    </span>
                    <span className='w-8  bg-neutral-100 text-end pe-1 text-xs text-gray-700'>{quantity}</span>
                    <span className="bg-neutral-300 text-xs active:scale-90 p-0.5" onClick={() => handleUpdateQuantity(quantity + 1)}> <FaPlus/></span>
                </div>
                </div>
            </div>

        </Card>
    )
}

export default CartComponents
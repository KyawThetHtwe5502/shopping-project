import React, { useEffect, useRef } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {Button} from "@/components/ui/button"
  import {BsCart3} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import CartComponents from './Cart.components'
import { setCartBtnInfo } from '../store/slice/cartSlice'
const DrawerComponents = () => {
    const carts = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();
    const cartRef = useRef()
    const handleBtn = () => {
      window.location.reload();

    }
    useEffect(() => {
      dispatch(setCartBtnInfo(cartRef.current.getBoundingClientRect()))
    },[])
  return (
    <Sheet>
  <SheetTrigger >
    <Button ref={cartRef}  className="relative ">
        <BsCart3/>
        <span className='absolute top-0  right-0 -translate-y-1/2 translate-x-1/2 bg-red-500 w-4 h-4 text-xs flex items-center justify-center text-white rounded-full'>{carts.length}</span>
    </Button>

  </SheetTrigger>
  <SheetContent className="flex flex-col p-0">
    <SheetHeader className=" p-5 border-b border-gray-800">
      <h3 className="text-2xl font-bold">E-Shop</h3>
      <span className='flex items-center gap-x-2'><p className='text-lg'>E-commerce</p> 
      <span className='px-2 py-1 rounded-md inline-flex items-center justify-center bg-red-500 text-white text-xs'>
        {carts.length}
      </span>
      </span>
    </SheetHeader>
    <div className='px-5 pt-16 flex-grow flex flex-col gap-14 overflow-y-scroll'>
        {carts.length === 0 && <div className='m-auto text-center w-3/4'>
          <img src="/empty-cart.svg"  alt="empty" /> 
          <p className='font-bold text-gray-700'>There is no item in cart</p>
        </div>}
        {carts.map((cart) => <CartComponents key={cart.id} cart={cart} />)}
    </div>
    
    <div className='mt-auto border-t border-gray-800 p-5'>
    <div className="flex flex-col justify-start py-3">
          <div className="text-end">
            <p className="text-neutral-500">Total Cost</p>
            <h1 className="font-heading font-bold text-2xl">
            <span>${" "} {carts.reduce((pv,cv) => pv + (cv.quantity * cv.price),0).toFixed(2)}</span>
            </h1>
          </div>
          <Button onClick={handleBtn}
          >
            Order Now
          </Button>
        </div>
    </div>
  </SheetContent>
</Sheet>

  )
}

export default DrawerComponents
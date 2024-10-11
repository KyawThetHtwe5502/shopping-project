import React, { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../store/slice/cartSlice'
import { Link } from 'react-router-dom'
import RateStarComponents from './RateStar.components'
import AnimateImgComponents from './AnimateImg.components'

const ProductComponents = ({ product: { id, image, title, description, rating: { rate, count }, price } }) => {
  const [added, setAdded] = useState(false);
  const [animate,setAnimate] = useState(false)
  const carts = useSelector((state) => state.cart.carts);
  const existedCart = carts.some((cart) => cart.id === id)
  const dispatcher = useDispatch();
  const imgRef = useRef();
  const handleAddBtn = () => {
    setAdded(true)
    setAnimate(true)
    if (!added) {
      const newCart = {
        id,
        price,
        image,
        title,
        quantity: 1,
      };

      dispatcher(addCart(newCart))

    }

  }

  useEffect(() => {
    if (existedCart) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }, [existedCart])

  return (
    <>
      <Card className="mb-14 border-gray-700">
        <img src={image} ref={imgRef} className='h-32 ms-6 -mt-14 hover:-rotate-6 duration-300 transition-transform' alt="" />
        {animate && <AnimateImgComponents img={image} setAnimate={setAnimate} info={imgRef.current.getBoundingClientRect()} />}
        <CardHeader>
          <CardTitle className="line-clamp-1 text-gray-700">{title}</CardTitle>
          <div>

          <CardDescription className="line-clamp-3">{description}</CardDescription>
          <Link to={`/detail/${id}`} className='text-blue-600 text-sm' >See more...</Link>

          </div>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-between'>
            <RateStarComponents rate={rate} />
            <span>({rate}/{count})</span>
          </div>
          <hr />
          <p className='font-bold text-gray-600 text-lg'>${" "}{price}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddBtn} disabled={added} className={`w-full text-gray-700 bg-white border border-gray-700 hover:text-white ${added && "bg-primary text-white"}`}>{added ? "Added" : "Add To Cart"}</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProductComponents
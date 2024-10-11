import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const AnimateImgComponents = ({info,img,setAnimate}) => {
  const cartInfo = useSelector((state) => state.cart.cartBtnInfo);
  console.log(cartInfo);
  const imgRef = useRef();
  const styles={
    top : info.top + "px",
    left : info.left + "px",
    width : info.width + "px",
    height : info.height + "px"
  }
  useEffect(() => {
    const keyframes = [{
      top : info.top + "px",
      left : info.left + "px"
    },{ top : cartInfo.top  + 10 + "px",
      left : cartInfo.left + 10 + "px",
      width : 10 + "px",
      height : 10 + "px",
      rotate : "2turn"
     }] 
     const options = {
      duration : 500,
      iterations : 1,
      fill : "both"
     }
      const animation = imgRef.current.animate(keyframes, options);
      const run = () => {
        setAnimate(false)
      }
      animation.addEventListener("finish",run)
      return () => {
        animation.removeEventListener("finish",run)

      }
  },[])
  return (
    <img src={img} ref={imgRef} style={styles} className='fixed z-50' alt="animate" />
  )
}

export default AnimateImgComponents
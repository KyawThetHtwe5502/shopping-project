import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../store/service/endpoints/products.endpoints'
import RateStarComponents from '../components/RateStar.components'

const DetailProductPage = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { isLoading, isError, data } = useGetSingleProductQuery(id);
    const nav = useNavigate()
    useEffect(() => {
        setProduct(data)
    }, [data])

    return (
        <div className=' h-screen py-8'>
            {isLoading ? <>Loading</> :
                <div className='container mx-auto h-full '>
                    <div className='py-5 flex items-center justify-between'>
                        
                        <img src={product?.image} className='h-96 ' alt="" />
                        <div className='p-20 flex flex-col gap-5'>
                            <div>
                                <h1 className='text-3xl font-bold mb-5'>{product?.title}</h1>
                                <p className='text-gray-500'>{product?.description}</p>
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <RateStarComponents rate={product?.rating?.rate} />
                                    <span>({product?.rating?.rate}/{product?.rating?.count})</span>
                                </div>
                                
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-xl font-semibold'>${" "}{product?.price}</p>
                                <Button onClick={() => nav(-1)} className="hover:bg-blue-500" >Back</Button>
                            </div>
                        </div>
                    </div>
                </div>
            }        </div>

    )
}

export default DetailProductPage